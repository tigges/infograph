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
      <blockquote>“${point.quote}” <cite>${point.page}</cite></blockquote>
      <p>${point.body}</p>
      <p class="sig"><strong>Significance.</strong> ${point.significance}</p>
    </article>`;

  const compareCell = (item) => `
    <article class="compare">
      <div class="compare-kicker">${item.kicker}</div>
      <div class="compare-value">${item.value}</div>
      <p>${item.label}</p>
    </article>`;

  const mast = (extra = "") => `
    <header class="mast">
      <p class="kicker">${data.kicker}</p>
      <h1>${data.titleShort}</h1>
      <p class="lede">${data.lede}</p>
      ${extra}
    </header>`;

  const foot = `<footer class="foot">${data.footer}</footer>`;

  document.getElementById("poster-a3").innerHTML = `
    ${mast(`<div class="legend">${D.chinaFlag()} China &nbsp;&nbsp; ${D.ghanaFlag()} Africa · Ghana</div>`)}
    <p class="chapter china">${data.china.chapter}<br><em>“${data.china.chapterQuote}”</em> — ${data.china.chapterPage}</p>
    <div class="trio">${data.china.points.map((p, i) => pointCard(p, "china", chinaDiags[i])).join("")}</div>
    <section class="verdict">
      <h2>The comparison — why does one develop faster?</h2>
      <div class="quad">${data.comparisons.map(compareCell).join("")}</div>
    </section>
    <p class="chapter africa">${data.africa.chapter}<br><em>“${data.africa.chapterQuote}”</em></p>
    <div class="trio">${data.africa.points.map((p, i) => pointCard(p, "africa", africaDiags[i])).join("")}</div>
    ${foot}`;

  document.getElementById("poster-flat").innerHTML = `
    <div class="flat-bar">
      <span>FLAT INFOGRAPHIC  //  Prisoners of Geography</span>
      <span>Vol. China vs Africa</span>
    </div>
    ${mast("")}
    <div class="hero-nums">
      <div><b>1/4</b><span>of people will be African</span></div>
      <div><b>3×</b><span>Africa’s land vs China</span></div>
      <div><b>No.1</b><span>world’s largest navy</span></div>
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
      <div><small>01</small><b>Hu Line</b><span>fertile East</span></div>
      <div><small>02</small><b>3×</b><span>Africa’s area</span></div>
      <div><small>03</small><b>1 in 4</b><span>will be African</span></div>
    </div>
    <p class="vol">Vol. 2  ·  The six points</p>
    <div class="duo">
      <div>
        <h2 class="china">China</h2>
        ${data.china.points.map((p, i) => pointCard(p, "china", chinaDiags[i])).join("")}
      </div>
      <div>
        <h2 class="africa">Africa</h2>
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
      <h3><span>${point.num}</span> ${point.short}</h3>
      ${chart}
      <p>${point.body}</p>
    </article>`;

  const milestone = (point, side, status) => `
    <li class="${side}">
      <span class="ms-num">${point.num}</span>
      <div>
        <strong>${point.short}</strong>
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
      <h1>China vs Africa<br>Geography Report</h1>
      <p>${data.lede}</p>
    </header>
    <div class="rep-duo">
      ${widget("Overall geography", D.lineGrowth(), "China concentrates a core, then extends it. Africa stays split.")}
      ${widget("Population share", D.donut(25), "Within decades one in four people on Earth will be African. p. 217")}
    </div>
    <div class="rep-duo">
      ${widget("Usable geography", D.hbars(), "Africa is 3× the land; China has the connected, usable share.")}
      ${widget("Sea vs land barriers", D.stacked(), "China’s navy extends the core. Africa’s coast lacks harbours.")}
    </div>
    <div class="rep-six">
      ${data.china.points.map((p, i) => reportPoint(p, chinaDiags[i])).join("")}
      ${data.africa.points.map((p, i) => reportPoint(p, africaDiags[i])).join("")}
    </div>
    <div class="rep-quad">
      ${data.comparisons.map((item) => widget(item.kicker, `<div class="rep-stat">${item.value}</div>`, item.label)).join("")}
    </div>
    ${foot}`;

  document.getElementById("poster-progress").innerHTML = `
    <div class="prog-meta">
      <span>Marshall  ·  Prisoners of Geography  ·  V3</span>
      <span class="mark">///</span>
    </div>
    <header class="prog-head">
      <h1>Development Progress Report</h1>
      <p>A visual representation of why one geography develops faster.</p>
    </header>
    <div class="prog-duo">
      ${widget("China — secured by geography", D.rings([[100, "Hu Line"], [100, "Buffers"], [100, "Navy"]]), data.china.chapterQuote)}
      ${widget("Africa — prisoners of geography", D.rings([[28, "Rivers"], [22, "Harbours"], [35, "Borders"]]), data.africa.chapterQuote)}
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
        ${widget("Key performance", D.hbars(), "Heartland, buffers and navy vs rivers, harbours and borders.")}
        ${widget("1 in 4 people", D.peopleRow(), "Africa’s population challenge — p. 217")}
      </div>
    </div>
    <div class="prog-quad">
      ${data.comparisons.map((item) => `
        <article class="widget kpi">
          <h3>${item.kicker}</h3>
          <div class="rep-stat">${item.value}</div>
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
      <p>Key insights:</p>
      <h1>Geography</h1>
      <p class="lede">${data.lede}</p>
    </header>
    <div class="ins-top">
      ${dataBlock("1", data.china.points[0].short, data.china.points[0].body, chinaDiags[0] + D.columns())}
      ${dataBlock("2", "Why one develops faster", data.comparisons[3].label, D.steps())}
    </div>
    ${dataBlock("3", "Buffer ring and the navy", `${data.china.points[1].body} ${data.china.points[2].significance}`, D.orgCore())}
    <div class="ins-mid">
      ${dataBlock("4", data.africa.points[0].short, data.africa.points[0].body, africaDiags[0])}
      ${dataBlock("5", "1 in 4 will be African", data.africa.points[2].body, D.donut(25) + D.peopleRow())}
    </div>
    <article class="data-block wide">
      <h3>Data 6</h3>
      <strong>${data.africa.points[1].short}</strong>
      <p>${data.africa.points[1].body}</p>
      <div class="ins-map">
        <img src="assets/world-map-backdrop.jpg" alt="">
        ${africaDiags[1]}
      </div>
    </article>
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
