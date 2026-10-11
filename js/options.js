(function () {
  const data = window.INFOGRAPHIC;
  if (!data) return;

  const card = (point, side) => `
    <article class="card ${side}">
      <span class="num">${point.num}</span>
      <div>
        <h3>${point.title}</h3>
        <p>${point.body}</p>
      </div>
    </article>`;

  const compare = (item) => `
    <article class="compare">
      <div class="compare-kicker">${item.kicker}</div>
      <div class="compare-value">${item.value}</div>
      <div class="compare-label">${item.label}</div>
    </article>`;

  const masthead = `
    <header class="mast">
      <span class="kicker">${data.kicker}</span>
      <h1>
        <span class="china">${data.titleLead}</span>
        <span class="join">${data.titleJoin}</span>
        <span class="africa">${data.titleTrail}</span>
        <span class="rest">${data.titleRest}</span>
      </h1>
      <p class="sub">${data.subtitle}</p>
    </header>`;

  const foot = `
    <footer class="mast-foot">
      <span>${data.footerLeft}</span>
      <span>${data.footerRight}</span>
    </footer>`;

  document.getElementById("poster-a").innerHTML = `
    <img class="wash" src="assets/world-map-backdrop.jpg" alt="" />
    <div class="scrim"></div>
    ${masthead}
    <section class="chapter china-ch">
      <div class="ch-head"><h2>China’s development</h2><span>01 — 03</span></div>
      <div class="a-top">
        ${card(data.china.points[0], "china")}
        <div class="map-slot">
          <img src="assets/china-map-closeup.jpg" alt="China" />
        </div>
        ${card(data.china.points[1], "china")}
      </div>
      ${card(data.china.points[2], "china wide")}
    </section>
    <section class="compare-band">
      <p class="band-label">Why one develops further</p>
      <div class="band-row">${data.comparisons.map(compare).join("")}</div>
    </section>
    <section class="chapter africa-ch">
      <div class="ch-head"><h2>Africa</h2><span>01 — 03</span></div>
      <div class="a-top">
        ${card(data.africa.points[0], "africa")}
        <div class="map-slot">
          <img src="assets/africa-map-closeup.jpg" alt="Africa" />
        </div>
        ${card(data.africa.points[2], "africa")}
      </div>
      ${card(data.africa.points[1], "africa wide")}
    </section>
    ${foot}`;

  document.getElementById("poster-b").innerHTML = `
    <img class="wash" src="assets/world-map-backdrop.jpg" alt="" />
    <div class="scrim"></div>
    ${masthead}
    <section class="split china-ch">
      <div class="map-slot tall">
        <img src="assets/china-map-closeup.jpg" alt="China" />
      </div>
      <div class="stack">
        <div class="ch-head"><h2>China’s development</h2><span>Heartland first</span></div>
        ${data.china.points.map((p) => card(p, "china")).join("")}
      </div>
    </section>
    <section class="compare-band">
      <p class="band-label">Comparison</p>
      <div class="band-row">${data.comparisons.map(compare).join("")}</div>
    </section>
    <section class="split reverse africa-ch">
      <div class="stack">
        <div class="ch-head"><h2>Africa</h2><span>Barriers first</span></div>
        ${data.africa.points.map((p) => card(p, "africa")).join("")}
      </div>
      <div class="map-slot tall">
        <img src="assets/africa-map-closeup.jpg" alt="Africa" />
      </div>
    </section>
    ${foot}`;

  document.getElementById("poster-c").innerHTML = `
    <img class="wash" src="assets/world-map-backdrop.jpg" alt="" />
    <div class="scrim"></div>
    ${masthead}
    <div class="spine-wrap">
      <div class="spine"></div>
      <article class="row left">${card(data.china.points[0], "china")}<span class="node china-n">C1</span></article>
      <article class="row right"><span class="node china-n">C2</span>${card(data.china.points[1], "china")}</article>
      <article class="row left">${card(data.china.points[2], "china")}<span class="node china-n">C3</span></article>
      <div class="spine-comp">
        ${data.comparisons.map(compare).join("")}
      </div>
      <article class="row right"><span class="node africa-n">A1</span>${card(data.africa.points[0], "africa")}</article>
      <article class="row left">${card(data.africa.points[1], "africa")}<span class="node africa-n">A2</span></article>
      <article class="row right"><span class="node africa-n">A3</span>${card(data.africa.points[2], "africa")}</article>
    </div>
    ${foot}`;

  document.querySelectorAll(".frame-wrap").forEach((wrap) => {
    const poster = wrap.querySelector(".poster");
    const fit = () => {
      const scale = Math.min(1, wrap.clientWidth / 1080);
      poster.style.transform = `scale(${scale})`;
      wrap.style.height = `${poster.offsetHeight * scale}px`;
    };
    fit();
    window.addEventListener("resize", fit);
  });
})();
