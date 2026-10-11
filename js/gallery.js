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

  document.getElementById("poster-dash").innerHTML = `
    ${mast("")}
    <div class="dash">
      <section>
        <h2 class="china">China · secured by geography</h2>
        ${data.china.points.map((p, i) => pointCard(p, "china", chinaDiags[i])).join("")}
      </section>
      <section class="mid">
        <h2>Key insights</h2>
        ${data.comparisons.map(compareCell).join("")}
        <div class="insight-num">1 in 4</div>
        <p class="insight-note">Africa’s population challenge — p. 217</p>
      </section>
      <section>
        <h2 class="africa">Africa · prisoners of geography</h2>
        ${data.africa.points.map((p, i) => pointCard(p, "africa", africaDiags[i])).join("")}
      </section>
    </div>
    ${foot}`;

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
