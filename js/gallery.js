(function () {
  const data = window.INFOGRAPHIC;
  const D = window.DIAGRAMS;
  if (!data || !D) return;

  const chinaDiags = [D.huLine(), D.buffers(), D.ninedash()];
  const africaDiags = [D.africaSplit(), D.colonialLines(), D.oneInFour()];

  const pointCard = (point, side, diagram) => `
    <article class="card ${side}">
      <div class="card-top">
        <span class="num">${point.num}</span>
        <h3>${point.title}</h3>
      </div>
      ${diagram || ""}
      <blockquote>“${point.quote}”</blockquote>
      <p>${point.body}</p>
      <p class="sig"><strong>Significance.</strong> ${point.significance}</p>
    </article>`;

  const compareCell = (item) => `
    <article class="compare">
      <div class="compare-kicker">${item.kicker}</div>
      <p>${item.label}</p>
    </article>`;

  const mast = (extra = "") => `
    <header class="mast">
      <p class="kicker">${data.kicker}</p>
      <h1>${data.title}</h1>
      ${extra}
    </header>`;

  const foot = `<footer class="foot">${data.footer}</footer>`;

  document.getElementById("poster-a3").innerHTML = `
    ${mast(`<div class="legend">${D.chinaFlag()} China &nbsp;&nbsp; ${D.ghanaFlag()} Africa</div>`)}
    <p class="chapter china">${data.china.region}<br><em>${data.china.eyebrow}</em></p>
    <div class="trio">${data.china.points.map((p, i) => pointCard(p, "china", chinaDiags[i])).join("")}</div>
    <section class="verdict">
      <h2>${data.compareTitle} — ${data.compareSub}</h2>
      <div class="quad">${data.comparisons.map(compareCell).join("")}</div>
    </section>
    <p class="chapter africa">${data.africa.region}<br><em>${data.africa.eyebrow}</em></p>
    <div class="trio">${data.africa.points.map((p, i) => pointCard(p, "africa", africaDiags[i])).join("")}</div>
    ${foot}`;

  document.getElementById("poster-flat").innerHTML = `
    <div class="flat-bar">
      <span>FLAT INFOGRAPHIC  //  Prisoners of Geography</span>
      <span>Vol. China vs Africa</span>
    </div>
    ${mast("")}
    <div class="hero-nums">
      <div><b>1/4</b><span>one in four people will be African</span></div>
      <div><b>3×</b><span>Africa is roughly three times China’s land area</span></div>
      <div><b>Navy</b><span>now the world’s largest navy</span></div>
    </div>
    <div class="pin-row">
      <div class="pin-map"><img src="assets/world-map-backdrop.jpg" alt=""><span class="pin a"></span><span class="pin c"></span></div>
      <div class="bubbles">
        <span>Heartland</span><span>Buffers</span><span>Nine-Dash</span>
        <span>Waterfalls</span><span>Colonial lines</span><span>1 in 4</span>
      </div>
    </div>
    <div class="trio compact">${data.china.points.map((p, i) => pointCard(p, "china", chinaDiags[i])).join("")}</div>
    <div class="strip">${data.comparisons.map(compareCell).join("")}</div>
    <div class="trio compact">${data.africa.points.map((p, i) => pointCard(p, "africa", africaDiags[i])).join("")}</div>
    ${foot}`;

  document.getElementById("poster-vintage").innerHTML = `
    <div class="ribbon"><span>Vol. 1</span> Infographic elements · Prisoners of Geography</div>
    ${mast(`<div class="badge">The world of geography</div>`)}
    <div class="vintage-map">
      <img src="assets/world-map-backdrop.jpg" alt="">
      <span class="flagpole china">China</span>
      <span class="flagpole africa">Africa</span>
    </div>
    <div class="tiles">
      <div><small>01</small><b>Hu Line</b><span>Heihe to Yunan</span></div>
      <div><small>02</small><b>3×</b><span>Africa’s land area</span></div>
      <div><small>03</small><b>1 in 4</b><span>will be African</span></div>
    </div>
    <p class="vol">Vol. 2  ·  The six points</p>
    <div class="duo">
      <div>
        <h2 class="china">${data.china.region}</h2>
        ${data.china.points.map((p, i) => pointCard(p, "china", chinaDiags[i])).join("")}
      </div>
      <div>
        <h2 class="africa">${data.africa.region}</h2>
        ${data.africa.points.map((p, i) => pointCard(p, "africa", africaDiags[i])).join("")}
      </div>
    </div>
    <div class="strip cream">${data.comparisons.map(compareCell).join("")}</div>
    ${foot}`;

  const widget = (title, chart, note = "") => `
    <article class="widget">
      <h3>${title}</h3>
      ${chart}
      ${note ? `<p>${note}</p>` : ""}
    </article>`;

  const reportPoint = (point, chart) => `
    <article class="widget point">
      <h3><span>${point.num}</span> ${point.title}</h3>
      ${chart}
      <p>${point.body}</p>
    </article>`;

  const milestone = (point, side, status) => `
    <li class="${side}">
      <span class="ms-num">${point.num}</span>
      <div>
        <strong>${point.title}</strong>
        <em>${status}</em>
        <p>${point.significance}</p>
      </div>
    </li>`;

  const dataBlock = (n, title, body, extra = "") => `
    <article class="data-block">
      <h3>Data ${n}</h3>
      <strong>${title}</strong>
      <p>${body}</p>
      ${extra}
    </article>`;

  document.getElementById("poster-report").innerHTML = `
    <div class="plus tl">+</div><div class="plus tr">+</div>
    <header class="rep-head">
      <p class="kicker">${data.kicker}</p>
      <h1>${data.title}</h1>
    </header>
    <div class="rep-duo">
      ${widget("Similarities", D.lineGrowth(), data.comparisons[0].label)}
      ${widget("Population growth", D.donut(25), data.africa.points[2].quote)}
    </div>
    <div class="rep-duo">
      ${widget("Which would be bigger?", D.hbars(), data.comparisons[2].label)}
      ${widget("Naval exploits + sea navigation", D.stacked(), data.china.points[2].body)}
    </div>
    <div class="rep-six">
      ${data.china.points.map((p, i) => reportPoint(p, chinaDiags[i])).join("")}
      ${data.africa.points.map((p, i) => reportPoint(p, africaDiags[i])).join("")}
    </div>
    <div class="rep-quad">
      ${data.comparisons.map((item) => widget(item.kicker, "", item.label)).join("")}
    </div>
    ${foot}`;

  document.getElementById("poster-progress").innerHTML = `
    <div class="prog-meta">
      <span>${data.kicker}</span>
      <span class="mark">///</span>
    </div>
    <header class="prog-head">
      <h1>${data.title}</h1>
      <p>${data.compareSub}</p>
    </header>
    <div class="prog-duo">
      ${widget(data.china.region + " — " + data.china.eyebrow, D.rings([[100, "Hu Line"], [100, "Buffers"], [100, "Navy"]]), data.china.points[0].significance)}
      ${widget(data.africa.region + " — " + data.africa.eyebrow, D.rings([[28, "Rivers"], [22, "Harbours"], [35, "Borders"]]), data.africa.points[0].significance)}
    </div>
    <div class="prog-duo">
      <article class="widget">
        <h3>Project milestones</h3>
        <ul class="milestones">
          ${data.china.points.map((p) => milestone(p, "china", "Secured")).join("")}
          ${data.africa.points.map((p, i) => milestone(p, "africa", i === 2 ? "Rising" : "Blocked")).join("")}
        </ul>
      </article>
      <div class="prog-stack">
        ${widget(data.comparisons[1].kicker, D.hbars(), data.comparisons[1].label)}
        ${widget(data.africa.points[2].quote, D.peopleRow(), data.africa.points[2].significance)}
      </div>
    </div>
    <div class="prog-quad">
      ${data.comparisons.map((item) => `
        <article class="widget kpi">
          <h3>${item.kicker}</h3>
          <p>${item.label}</p>
        </article>`).join("")}
    </div>
    <article class="widget gantt-wrap">
      <h3>Projected vs actual timelines</h3>
      ${D.gantt()}
    </article>
    ${foot}`;

  document.getElementById("poster-insights").innerHTML = `
    <header class="ins-head">
      <p>${data.kicker}</p>
      <h1>${data.title}</h1>
    </header>
    <div class="ins-top">
      ${dataBlock("1", data.china.points[0].title, data.china.points[0].body, chinaDiags[0] + D.columns())}
      ${dataBlock("2", data.china.points[1].title, data.china.points[1].body, D.orgCore())}
    </div>
    ${dataBlock("3", data.china.points[2].title, data.china.points[2].body, D.steps())}
    <div class="ins-mid">
      ${dataBlock("4", data.africa.points[0].title, data.africa.points[0].body, africaDiags[0])}
      ${dataBlock("5", data.africa.points[2].title, data.africa.points[2].body, D.donut(25) + D.peopleRow())}
    </div>
    <article class="data-block wide">
      <h3>Data 6</h3>
      <strong>${data.africa.points[1].title}</strong>
      <p>${data.africa.points[1].body}</p>
      <div class="ins-map">
        <img src="assets/world-map-backdrop.jpg" alt="">
        ${africaDiags[1]}
      </div>
    </article>
    <div class="rep-quad">
      ${data.comparisons.map(compareCell).join("")}
    </div>
    <footer class="ins-foot">${data.footer}</footer>`;

  const fitSheets = () => {
    document.querySelectorAll(".frame-wrap").forEach((wrap) => {
      const poster = wrap.querySelector(".poster");
      const scale = Math.min(1, wrap.clientWidth / poster.offsetWidth);
      poster.style.transform = `scale(${scale})`;
      wrap.style.height = `${poster.offsetHeight * scale}px`;
    });
  };
  fitSheets();
  window.addEventListener("resize", fitSheets);

  const preset = new URLSearchParams(location.search).get("print");
  if (preset) document.body.setAttribute("data-print", preset);

  const printSheet = (target) => {
    document.body.setAttribute("data-print", target);
    window.print();
  };

  document.querySelectorAll("[data-print]").forEach((btn) => {
    btn.addEventListener("click", () => printSheet(btn.getAttribute("data-print")));
  });

  window.addEventListener("afterprint", () => {
    document.body.removeAttribute("data-print");
  });
})();
