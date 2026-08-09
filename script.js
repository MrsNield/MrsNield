// =========================================================================
// Renders the site from SITE_DATA (data.js). No edits needed here for
// day-to-day updates — only data.js changes.
// =========================================================================

let currentCourse = "honors";
let currentHonorsTab = "progress";

function statusLabel(s) {
  if (s === "covered") return "Covered";
  if (s === "in-progress") return "In progress";
  return "Not started yet";
}

function renderCourseTabs() {
  const el = document.getElementById("courseTabs");
  el.innerHTML = SITE_DATA.courses.map(c =>
    `<button class="course-tab ${c.id === currentCourse ? "active" : ""}" data-course="${c.id}">${c.label}</button>`
  ).join("");
  el.querySelectorAll(".course-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCourse = btn.dataset.course;
      renderCourseTabs();
      renderMain();
    });
  });
}

function renderMain() {
  const main = document.getElementById("mainContent");
  if (currentCourse !== "honors") {
    const msg = SITE_DATA[currentCourse]?.message || "This course hasn't been planned yet — check back soon!";
    main.innerHTML = `<div class="placeholder-card">${msg}</div>`;
    return;
  }
  main.innerHTML = `
    <div class="sub-tabs" id="honorsSubTabs"></div>
    <div id="honorsPanels"></div>
  `;
  const tabs = [
    { id: "progress", label: "Progress" },
    { id: "rubric", label: "Standards Rubric" },
    { id: "board", label: "Board Work" },
    { id: "practice", label: "Practice & Videos" },
    { id: "bellringers", label: "Bellringers" }
  ];
  const subTabsEl = document.getElementById("honorsSubTabs");
  subTabsEl.innerHTML = tabs.map(t =>
    `<button class="sub-tab ${t.id === currentHonorsTab ? "active" : ""}" data-tab="${t.id}">${t.label}</button>`
  ).join("");
  subTabsEl.querySelectorAll(".sub-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentHonorsTab = btn.dataset.tab;
      renderMain();
    });
  });

  const panels = document.getElementById("honorsPanels");
  if (currentHonorsTab === "progress") panels.innerHTML = renderProgress();
  else if (currentHonorsTab === "rubric") panels.innerHTML = renderRubric();
  else if (currentHonorsTab === "board") panels.innerHTML = renderBoardWork();
  else if (currentHonorsTab === "practice") panels.innerHTML = renderPractice();
  else if (currentHonorsTab === "bellringers") panels.innerHTML = renderBellringers();

  if (currentHonorsTab === "practice") wirePracticeInteractivity();
}

function renderProgress() {
  const units = SITE_DATA.honors.units;
  let html = `
    <div class="card">
      <h2 class="section-title">Where We Are</h2>
      <div class="legend">
        <span><span class="status-dot not-started"></span> Not started yet</span>
        <span><span class="status-dot in-progress"></span> In progress</span>
        <span><span class="status-dot covered"></span> Covered</span>
      </div>
  `;
  units.forEach(unit => {
    html += `<h3 style="color:var(--navy);margin-bottom:6px;">${unit.name}</h3>`;
    unit.objectives.forEach(o => {
      html += `
        <div class="obj-row">
          <span class="status-dot ${o.status}"></span>
          <div class="obj-main">
            <span class="obj-id">${o.id}</span>${o.target}
            <span class="obj-teks">${o.teks}</span>
          </div>
          <span class="obj-status-label">${statusLabel(o.status)}${o.dates ? " · " + o.dates : ""}</span>
        </div>
      `;
    });
  });
  html += `</div>`;
  return html;
}

function renderRubric() {
  const units = SITE_DATA.honors.units;
  let html = `
    <div class="card">
      <h2 class="section-title">Standards-Based Grading Rubric</h2>
      <p class="rubric-note">These are the skills you should master by the end of each unit — objectives aren't tied to a single class period and may stretch across multiple days. A blank Advanced cell means that skill is only assessed up through Intermediate.</p>
      <a class="download-btn" href="${SITE_DATA.honors.rubricFile}" target="_blank" rel="noopener">⬇ Download the full rubric (PDF)</a>
  `;
  units.forEach(unit => {
    html += `<h3 style="color:var(--navy);">${unit.name}</h3>`;
    html += `<table class="rubric"><thead><tr>
      <th>Obj #</th><th>Learning Target</th><th>TEKS</th><th>Basic</th><th>Intermediate</th><th>Advanced</th>
    </tr></thead><tbody>`;
    unit.objectives.forEach(o => {
      html += `<tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.target}</td>
        <td>${o.teks}</td>
        <td class="basic-col">${o.basic || ""}</td>
        <td class="inter-col">${o.intermediate || ""}</td>
        <td class="adv-col">${o.advanced || ""}</td>
      </tr>`;
    });
    html += `</tbody></table>`;
  });
  html += `</div>`;
  return html;
}

function renderBoardWork() {
  const items = SITE_DATA.honors.boardWork;
  let html = `<div class="card"><h2 class="section-title">Board Work</h2>`;
  if (!items.length) {
    html += `<div class="empty-state">No board work has been posted yet — check back after class!</div>`;
  } else {
    html += `<div class="board-grid">`;
    items.forEach(item => {
      html += `
        <div class="board-item">
          <img src="${item.image}" alt="Board work from ${item.date}" loading="lazy">
          <div class="cap"><strong>${item.date}</strong>${item.objective ? " · " + item.objective : ""}${item.caption ? " — " + item.caption : ""}</div>
        </div>
      `;
    });
    html += `</div>`;
  }
  html += `</div>`;
  return html;
}

function renderPractice() {
  const objectives = SITE_DATA.honors.units.flatMap(u => u.objectives);
  const practice = SITE_DATA.honors.practice;
  const videos = SITE_DATA.honors.videos;
  let html = `
    <div class="card">
      <h2 class="section-title">Practice &amp; Videos</h2>
      <select class="obj-picker" id="objPicker">
        ${objectives.map(o => `<option value="${o.id}">${o.id} — ${o.target}</option>`).join("")}
      </select>
      <div id="practiceContent"></div>
    </div>
  `;
  return html;
}

function wirePracticeInteractivity() {
  const picker = document.getElementById("objPicker");
  const render = () => {
    const objId = picker.value;
    const items = SITE_DATA.honors.practice[objId] || [];
    const vids = SITE_DATA.honors.videos[objId] || [];
    let html = `<h3 style="color:var(--navy);">Videos</h3>`;
    if (!vids.length) {
      html += `<div class="empty-state">No videos posted yet for this objective.</div>`;
    } else {
      html += `<ul class="video-list">` + vids.map(v => `<li><a href="${v.url}" target="_blank" rel="noopener">${v.title}</a></li>`).join("") + `</ul>`;
    }
    html += `<h3 style="color:var(--navy);margin-top:20px;">Practice Problems</h3>`;
    if (!items.length) {
      html += `<div class="empty-state">No practice problems posted yet for this objective.</div>`;
    } else {
      html += items.map((qa, i) => `
        <div class="qa-item">
          <div class="qa-prompt">${i + 1}. ${qa.prompt}</div>
          <button class="reveal-btn" data-idx="${i}">Show answer</button>
          <div class="qa-answer" id="ans-${i}">${qa.answer}</div>
        </div>
      `).join("");
    }
    document.getElementById("practiceContent").innerHTML = html;
    document.querySelectorAll(".reveal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const ans = document.getElementById("ans-" + btn.dataset.idx);
        ans.classList.toggle("shown");
        btn.textContent = ans.classList.contains("shown") ? "Hide answer" : "Show answer";
      });
    });
  };
  picker.addEventListener("change", render);
  render();
}

function renderBellringers() {
  const items = SITE_DATA.honors.bellringers;
  let html = `<div class="card"><h2 class="section-title">Bellringer Archive</h2>
    <p class="rubric-note">Were you gone? Find the day you missed below.</p>`;
  if (!items.length) {
    html += `<div class="empty-state">No bellringers posted yet.</div>`;
  } else {
    items.forEach(b => {
      html += `
        <div class="bell-item">
          <div class="bell-date">${b.date}</div>
          <div>
            ${b.objective ? `<div class="obj-teks" style="display:inline-block;margin-bottom:6px;">${b.objective}</div><br>` : ""}
            <div>${b.prompt || ""}</div>
            ${b.image ? `<img src="${b.image}" alt="Bellringer from ${b.date}">` : ""}
          </div>
        </div>
      `;
    });
  }
  html += `</div>`;
  return html;
}

renderCourseTabs();
renderMain();
