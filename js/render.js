(function () {
  const data = window.INFOGRAPHIC;
  if (!data) return;

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value || "";
    });
  }

  setText('[data-field="kicker"]', data.kicker);
  setText('[data-field="titleLead"]', data.titleLead);
  setText('[data-field="titleJoin"]', data.titleJoin);
  setText('[data-field="titleTrail"]', data.titleTrail);
  setText('[data-field="titleRest"]', data.titleRest);
  setText('[data-field="subtitle"]', data.subtitle);
  setText('[data-field="draftNote"]', data.draftNote);
  setText('[data-field="africa.region"]', data.africa.region);
  setText('[data-field="africa.eyebrow"]', data.africa.eyebrow);
  setText('[data-field="china.region"]', data.china.region);
  setText('[data-field="china.eyebrow"]', data.china.eyebrow);
  setText('[data-field="footerLeft"]', data.footerLeft);
  setText('[data-field="footerRight"]', data.footerRight);

  function pointCard(point, side) {
    return `
      <article class="card ${side}">
        <span class="card-num">${point.num}</span>
        <div>
          <h3>${point.title}</h3>
          <p>${point.body}</p>
        </div>
      </article>
    `;
  }

  document.getElementById("africa-points").innerHTML = data.africa.points
    .map((point) => pointCard(point, "africa"))
    .join("");

  document.getElementById("china-points").innerHTML = data.china.points
    .map((point) => pointCard(point, "china"))
    .join("");

  document.getElementById("comparisons").innerHTML = data.comparisons
    .map(
      (item) => `
        <article class="compare-node">
          <div class="compare-kicker">${item.kicker}</div>
          <div class="compare-value">${item.value}</div>
          <div class="compare-label">${item.label}</div>
        </article>
      `
    )
    .join("");

  const poster = document.getElementById("poster");
  function fit() {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    poster.style.transform = `scale(${scale})`;
  }
  fit();
  window.addEventListener("resize", fit);
})();
