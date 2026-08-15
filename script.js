// =========================================================================
// Renders the site from SITE_DATA (data.js). No edits needed here for
// day-to-day updates — only data.js changes.
// =========================================================================

let currentCourse = "honors";
let currentHonorsTab = "progress";
let currentPrecalcTab = "calendar";

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
  if (currentCourse === "apcalc") {
    const msg = SITE_DATA.apcalc?.message || "This course hasn't been planned yet — check back soon!";
    main.innerHTML = `
      <div class="placeholder-card" style="margin-bottom:14px;">${msg}</div>
      <div id="apcalcPanels"></div>
    `;
    document.getElementById("apcalcPanels").innerHTML = renderApCalcUnits(SITE_DATA.apcalc?.units || []);
    return;
  }
  if (currentCourse === "precalc") {
    const msg = SITE_DATA.precalc?.message || "This course hasn't been planned yet — check back soon!";
    main.innerHTML = `
      <div class="placeholder-card" style="margin-bottom:14px;">${msg}</div>
      <div class="sub-tabs" id="precalcSubTabs"></div>
      <div id="precalcPanels"></div>
    `;
    const pTabs = [
      { id: "calendar", label: "Course Calendar" },
      { id: "bellringers", label: "Bellringers" }
    ];
    const pSubTabsEl = document.getElementById("precalcSubTabs");
    pSubTabsEl.innerHTML = pTabs.map(t =>
      `<button class="sub-tab ${t.id === currentPrecalcTab ? "active" : ""}" data-tab="${t.id}">${t.label}</button>`
    ).join("");
    pSubTabsEl.querySelectorAll(".sub-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        currentPrecalcTab = btn.dataset.tab;
        renderMain();
      });
    });
    const pPanels = document.getElementById("precalcPanels");
    if (currentPrecalcTab === "calendar") pPanels.innerHTML = renderCourseCalendar(SITE_DATA.precalc?.units || []);
    else if (currentPrecalcTab === "bellringers") pPanels.innerHTML = renderBellringers(SITE_DATA.precalc?.bellringers || []);
    return;
  }
  main.innerHTML = `
    <div class="sub-tabs" id="honorsSubTabs"></div>
    <div id="honorsPanels"></div>
  `;
  const tabs = [
    { id: "progress", label: "Progress" },
    { id: "calendar", label: "Course Calendar" },
    { id: "whatdidimiss", label: "What Did I Miss?" },
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
  else if (currentHonorsTab === "calendar") panels.innerHTML = renderCourseCalendar(SITE_DATA.honors.courseCalendar || [], false);
  else if (currentHonorsTab === "whatdidimiss") panels.innerHTML = renderWhatDidIMiss();
  else if (currentHonorsTab === "rubric") panels.innerHTML = renderRubric();
  else if (currentHonorsTab === "board") panels.innerHTML = renderBoardWork();
  else if (currentHonorsTab === "practice") panels.innerHTML = renderPractice();
  else if (currentHonorsTab === "bellringers") panels.innerHTML = renderBellringers(SITE_DATA.honors.bellringers);

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

function getObjectiveById(id) {
  const objectives = SITE_DATA.honors.units.flatMap(u => u.objectives);
  return objectives.find(o => o.id === id);
}

// Combines that day's covered objective (dailyLog), its bellringer, and its
// board work photos into one card per day — everything an absent student
// needs, in one place, instead of three separate tabs.
function renderWhatDidIMiss() {
  const dailyLog = SITE_DATA.honors.dailyLog || [];
  const boardWork = SITE_DATA.honors.boardWork || [];
  const bellringers = SITE_DATA.honors.bellringers || [];

  const dateSet = new Set();
  dailyLog.forEach(e => dateSet.add(e.date));
  boardWork.forEach(e => dateSet.add(e.date));
  bellringers.filter(isBellringerRevealed).forEach(b => dateSet.add(b.date));

  const dates = Array.from(dateSet).sort((a, b) => String(b).localeCompare(String(a)));

  let html = `<div class="card"><h2 class="section-title">What Did I Miss?</h2>
    <p class="rubric-note">Everything from a missed day — what we covered, that day's function of the day, and the board work — all in one place.</p>`;

  if (!dates.length) {
    html += `<div class="empty-state">Nothing to catch up on yet — check back once we start covering material!</div>`;
  } else {
    dates.forEach(date => {
      const covered = dailyLog.filter(e => e.date === date);
      const bell = bellringers.find(b => b.date === date && isBellringerRevealed(b));
      const boards = boardWork.filter(b => b.date === date);

      html += `<div class="miss-day">`;
      html += `<h3 class="day-heading">${formatDateLabel(date)}</h3>`;

      if (covered.length) {
        const coveredText = covered.map(e => {
          const obj = getObjectiveById(e.objective);
          return obj ? `${obj.id} — ${obj.target}` : e.objective;
        }).join(", ");
        html += `<div class="miss-section"><strong>Covered:</strong> ${coveredText}</div>`;
      }

      if (bell) {
        html += `<div class="miss-section"><strong>Function of the Day:</strong> ${bell.prompt}</div>`;
      }

      if (boards.length) {
        html += `<div class="miss-section"><strong>Board Work:</strong>
          <div class="board-grid" style="margin-top:8px;">`;
        boards.forEach(b => {
          html += `
            <div class="board-item">
              <img src="${b.image}" alt="Board work from ${b.date}" loading="lazy">
              ${b.caption ? `<div class="cap">${b.caption}</div>` : ""}
            </div>
          `;
        });
        html += `</div></div>`;
      }

      if (!covered.length && !bell && !boards.length) {
        html += `<div class="miss-section" style="color:var(--gray);font-style:italic;">Nothing posted for this day yet.</div>`;
      }

      html += `</div>`;
    });
  }

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

// ---- Precalculus: pre-planned course calendar. Unlike Honors' day-to-day
// logging, this is built once per unit ahead of time (lessons, homework days,
// quizzes, review, test days already scheduled against real class dates), so
// an absent student can just look up the date they missed with zero ongoing
// effort from Mrs. Nield. ----
const CALENDAR_TYPE_LABELS = {
  lesson: "Lesson",
  homework: "Homework",
  quiz: "Quiz",
  review: "Review",
  test: "Test",
  final: "Final"
};

function renderCourseCalendar(units, showMissedDayNote) {
  units = units || [];
  showMissedDayNote = showMissedDayNote !== false;
  let html = `<div class="card"><h2 class="section-title">Course Calendar</h2>
    ${showMissedDayNote ? `<p class="rubric-note">Missed a day? Find the date below to see what we covered.</p>` : ""}`;

  if (!units.length) {
    html += `<div class="empty-state">The calendar hasn't been built yet — check back soon!</div>`;
  } else {
    units.forEach(unit => {
      html += `<h3 style="color:var(--navy);">${unit.name}</h3>`;
      html += `<table class="rubric"><thead><tr><th style="width:110px;">Date</th><th>Day</th></tr></thead><tbody>`;
      unit.schedule.forEach(day => {
        const typeLabel = CALENDAR_TYPE_LABELS[day.type] || day.type;
        html += `<tr>
          <td style="white-space:nowrap;">${formatDateLabel(day.date)}</td>
          <td><span class="cal-badge cal-${day.type}">${typeLabel}</span> ${day.label}</td>
        </tr>`;
      });
      html += `</tbody></table>`;
    });
  }
  html += `</div>`;
  return html;
}

function formatDateLabel(dateStr) {
  const parts = String(dateStr).split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return dateStr;
  const [y, m, d] = parts;
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

// Groups a flat array of {date, objective, ...} entries into
// [{ date, topics: [ [objectiveLabel, [items...]], ... ] }, ...]
// sorted newest date first, regardless of the order items were added in data.js.
function groupByDayAndTopic(items) {
  const byDate = {};
  items.forEach(item => {
    (byDate[item.date] = byDate[item.date] || []).push(item);
  });
  const dates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));
  return dates.map(date => {
    const byTopic = {};
    byDate[date].forEach(item => {
      const topic = item.objective || "General";
      (byTopic[topic] = byTopic[topic] || []).push(item);
    });
    const topicOrder = Object.keys(byTopic).sort((a, b) => a.localeCompare(b));
    return { date, topics: topicOrder.map(t => [t, byTopic[t]]) };
  });
}

function renderBoardWork() {
  const items = SITE_DATA.honors.boardWork;
  let html = `<div class="card"><h2 class="section-title">Board Work</h2>`;
  if (!items.length) {
    html += `<div class="empty-state">No board work has been posted yet — check back after class!</div>`;
  } else {
    const grouped = groupByDayAndTopic(items);
    grouped.forEach(dayGroup => {
      html += `<h3 class="day-heading">${formatDateLabel(dayGroup.date)}</h3>`;
      dayGroup.topics.forEach(([topic, topicItems]) => {
        html += `<div class="topic-block">`;
        html += `<div class="topic-label">${topic}</div>`;
        html += `<div class="board-grid">`;
        topicItems.forEach(item => {
          html += `
            <div class="board-item">
              <img src="${item.image}" alt="Board work from ${item.date}" loading="lazy">
              ${item.caption ? `<div class="cap">${item.caption}</div>` : ""}
            </div>
          `;
        });
        html += `</div></div>`;
      });
    });
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
    const dmLink = (SITE_DATA.honors.deltamath || {})[objId];
    const vocabItems = (SITE_DATA.honors.vocab || {})[objId] || [];
    const graphItems = (SITE_DATA.honors.graphPractice || {})[objId] || [];

    let html = `<h3 style="color:var(--navy);">Videos</h3>`;
    if (!vids.length) {
      html += `<div class="empty-state">No videos posted yet for this objective.</div>`;
    } else {
      html += `<ul class="video-list">` + vids.map(v => `<li><a href="${v.url}" target="_blank" rel="noopener">${v.title}</a></li>`).join("") + `</ul>`;
    }

    html += `<h3 style="color:var(--navy);margin-top:20px;">DeltaMath Practice</h3>`;
    if (dmLink) {
      html += `<p class="rubric-note" style="margin-bottom:10px;">Log into your own DeltaMath account and this will take you straight to the assigned practice for ${objId}.</p>`;
      html += `<a class="download-btn" href="${dmLink}" target="_blank" rel="noopener">Go to DeltaMath Practice for ${objId}</a>`;
    } else {
      html += `<div class="empty-state">No DeltaMath assignment posted yet for this objective.</div>`;
    }

    html += `<h3 style="color:var(--navy);margin-top:20px;">Vocabulary Practice</h3>`;
    if (!vocabItems.length) {
      html += `<div class="empty-state">No vocabulary terms posted yet for this objective.</div>`;
    } else {
      html += `<div class="vocab-grid">` + vocabItems.map((v, i) => `
        <div class="flash-card">
          <div class="flash-term">${v.term}</div>
          <button class="reveal-btn" data-target="vocab-ans-${i}">Show definition</button>
          <div class="qa-answer" id="vocab-ans-${i}">${v.definition}</div>
        </div>
      `).join("") + `</div>`;
    }

    html += `<h3 style="color:var(--navy);margin-top:20px;">Graph Identification Practice</h3>`;
    if (!graphItems.length) {
      html += `<div class="empty-state">No graph identification practice posted yet for this objective.</div>`;
    } else {
      html += `<div class="graph-grid">` + graphItems.map((g, i) => `
        <div class="graph-card">
          <img src="${g.image}" alt="Graph to identify">
          <div class="qa-prompt">${g.prompt || "Identify this graph."}</div>
          <button class="reveal-btn" data-target="graph-ans-${i}">Show answer</button>
          <div class="qa-answer" id="graph-ans-${i}">${g.answer}</div>
        </div>
      `).join("") + `</div>`;
    }

    html += `<h3 style="color:var(--navy);margin-top:20px;">Practice Problems</h3>`;
    if (!items.length) {
      html += `<div class="empty-state">No practice problems posted yet for this objective.</div>`;
    } else {
      html += items.map((qa, i) => `
        <div class="qa-item">
          <div class="qa-prompt">${i + 1}. ${qa.prompt}</div>
          <button class="reveal-btn" data-target="ans-${i}">Show answer</button>
          <div class="qa-answer" id="ans-${i}">${qa.answer}</div>
        </div>
      `).join("");
    }
    document.getElementById("practiceContent").innerHTML = html;
    document.querySelectorAll(".reveal-btn").forEach(btn => {
      const showLabel = btn.textContent;
      const hideLabel = "Hide" + showLabel.replace(/^Show/, "");
      btn.addEventListener("click", () => {
        const ans = document.getElementById(btn.dataset.target);
        ans.classList.toggle("shown");
        btn.textContent = ans.classList.contains("shown") ? hideLabel : showLabel;
      });
    });
  };
  picker.addEventListener("change", render);
  render();
}

// Each day's "function of the day" bellringer stays hidden from students until
// this local hour on its date, then stays visible forever afterward (it becomes
// part of the archive for anyone who was absent). Relies on visitors' devices
// having the correct local time — fine for a school setting.
const BELLRINGER_REVEAL_HOUR = 16; // 4:00 PM

function bellringerRevealTime(dateStr) {
  const parts = String(dateStr).split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return null;
  const [y, m, d] = parts;
  return new Date(y, m - 1, d, BELLRINGER_REVEAL_HOUR, 0, 0);
}

function isBellringerRevealed(item) {
  const revealTime = bellringerRevealTime(item.date);
  if (!revealTime) return true; // fail-open on a malformed date rather than hiding it forever
  return new Date() >= revealTime;
}

function isSameLocalDate(dateStr, compareTo) {
  const parts = String(dateStr).split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return false;
  const [y, m, d] = parts;
  return y === compareTo.getFullYear() && (m - 1) === compareTo.getMonth() && d === compareTo.getDate();
}

function renderApCalcUnits(units) {
  units = units || [];
  let html = `<div class="card"><h2 class="section-title">Unit Resources</h2>`;
  if (!units.length) {
    html += `<div class="empty-state">No units posted yet — check back soon!</div>`;
  } else {
    units.forEach(unit => {
      html += `<h3 style="color:var(--navy);">${unit.name}</h3>`;
      (unit.resources || []).forEach(r => {
        html += `<a class="download-btn" href="${r.file}" target="_blank" rel="noopener" style="margin-right:10px;">⬇ ${r.label}</a>`;
      });
    });
  }
  html += `</div>`;
  return html;
}

function renderBellringers(items) {
  items = items || [];
  const now = new Date();
  const revealed = items
    .filter(isBellringerRevealed)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  // Only flag "posting at 4pm" for an entry dated TODAY — a whole schedule of
  // future dates loaded in advance should stay completely invisible until
  // its own day arrives, not show a note for every day still to come.
  const pendingToday = items.some(b => !isBellringerRevealed(b) && isSameLocalDate(b.date, now));

  let html = `<div class="card"><h2 class="section-title">Bellringer Archive</h2>
    <p class="rubric-note">Were you gone? Find the day you missed below. Each day's function of the day posts at 4:00 PM.</p>`;

  if (pendingToday) {
    html += `<div class="empty-state">Today's function of the day will post at 4:00 PM — check back after class!</div>`;
  }

  if (!revealed.length) {
    if (!pendingToday) html += `<div class="empty-state">No bellringers posted yet.</div>`;
  } else {
    revealed.forEach(b => {
      html += `
        <div class="bell-item">
          <div class="bell-date">${formatDateLabel(b.date)}</div>
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
