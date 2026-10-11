window.DIAGRAMS = {
  huLine() {
    return `<svg class="diag" viewBox="0 0 220 130" aria-hidden="true">
      <rect x="8" y="10" width="204" height="110" fill="none" stroke="currentColor" opacity=".2"/>
      ${Array.from({ length: 18 }, (_, i) => {
        const x = 28 + (i % 6) * 12;
        const y = 28 + Math.floor(i / 6) * 14;
        return `<circle cx="${x}" cy="${y}" r="1.6" fill="currentColor" opacity=".28"/>`;
      }).join("")}
      ${Array.from({ length: 42 }, (_, i) => {
        const x = 118 + (i % 7) * 11;
        const y = 24 + Math.floor(i / 7) * 13;
        return `<circle cx="${x}" cy="${y}" r="2.1" fill="currentColor"/>`;
      }).join("")}
      <line x1="48" y1="22" x2="168" y2="112" stroke="#e23c28" stroke-width="2.6"/>
      <text x="18" y="22" font-size="9">Heihe</text>
      <text x="168" y="124" font-size="9">Yunan</text>
      <text x="24" y="118" font-size="8" opacity=".7">mountains, desert, sparse</text>
      <text x="124" y="18" font-size="8" opacity=".7">fertile East</text>
    </svg>`;
  },

  buffers() {
    return `<svg class="diag" viewBox="0 0 220 130" aria-hidden="true">
      <ellipse cx="110" cy="68" rx="88" ry="46" fill="none" stroke="currentColor" stroke-dasharray="4 4" opacity=".45"/>
      <ellipse cx="110" cy="68" rx="42" ry="22" fill="#e23c28" opacity=".12" stroke="#e23c28"/>
      <text x="110" y="72" text-anchor="middle" font-size="10">core</text>
      <circle cx="28" cy="30" r="3" fill="currentColor" opacity=".45"/>
      <circle cx="196" cy="36" r="3" fill="currentColor" opacity=".45"/>
      <circle cx="40" cy="108" r="3" fill="currentColor" opacity=".45"/>
      <circle cx="186" cy="104" r="3" fill="currentColor" opacity=".45"/>
      <text x="110" y="18" text-anchor="middle" font-size="8" opacity=".7">many neighbours · deterrent to invaders</text>
      <text x="110" y="124" text-anchor="middle" font-size="8" opacity=".7">buffer zones</text>
    </svg>`;
  },

  ninedash() {
    return `<svg class="diag" viewBox="0 0 220 130" aria-hidden="true">
      <path d="M40 96 C 70 20, 160 18, 190 88" fill="none" stroke="#e23c28" stroke-width="3" stroke-dasharray="10 8"/>
      <circle cx="118" cy="72" r="16" fill="#e23c28" opacity=".12"/>
      <text x="20" y="24" font-size="9">Nine-Dash Line</text>
      <text x="132" y="70" font-size="8" opacity=".7">trade routes</text>
      <text x="150" y="118" font-size="8" opacity=".7">local-area dominance</text>
    </svg>`;
  },

  africaSplit() {
    return `<svg class="diag" viewBox="0 0 220 130" aria-hidden="true">
      <line x1="110" y1="18" x2="110" y2="112" stroke="#2f9b6e" stroke-width="2"/>
      <path d="M96 48 l14 8 -14 8 14 8" fill="none" stroke="#2f9b6e" stroke-width="2"/>
      <text x="110" y="14" text-anchor="middle" font-size="9">North</text>
      <text x="110" y="126" text-anchor="middle" font-size="9">South</text>
      <text x="128" y="56" font-size="8">waterfalls</text>
      <text x="18" y="80" font-size="8" opacity=".75">no through-trade  ✕</text>
    </svg>`;
  },

  colonialLines() {
    return `<svg class="diag" viewBox="0 0 220 130" aria-hidden="true">
      <ellipse cx="64" cy="58" rx="28" ry="18" fill="#2f9b6e" opacity=".18" stroke="#2f9b6e"/>
      <ellipse cx="92" cy="78" rx="24" ry="16" fill="#2f9b6e" opacity=".18" stroke="#2f9b6e"/>
      <path d="M140 24 V110 M162 24 V110 M184 24 V110 M128 40 H196 M128 70 H196 M128 100 H196" stroke="currentColor" stroke-width="1.2" opacity=".45"/>
      <text x="64" y="120" text-anchor="middle" font-size="8">ethnic groups</text>
      <text x="166" y="120" text-anchor="middle" font-size="8">European lines</text>
    </svg>`;
  },

  oneInFour() {
    return `<svg class="diag" viewBox="0 0 220 130" aria-hidden="true">
      <text x="16" y="72" font-size="52" font-family="Fraunces, serif">1</text>
      <text x="50" y="48" font-size="12">in</text>
      <text x="50" y="78" font-size="36" font-family="Fraunces, serif">4</text>
      <g fill="#2f9b6e">
        <circle cx="124" cy="40" r="8"/>
        <rect x="116" y="50" width="16" height="22" rx="6"/>
      </g>
      <g fill="currentColor" opacity=".28">
        <circle cx="148" cy="40" r="8"/><rect x="140" y="50" width="16" height="22" rx="6"/>
        <circle cx="172" cy="40" r="8"/><rect x="164" y="50" width="16" height="22" rx="6"/>
        <circle cx="196" cy="40" r="8"/><rect x="188" y="50" width="16" height="22" rx="6"/>
      </g>
      <text x="130" y="96" font-size="9">people will be African</text>
      <text x="130" y="112" font-size="8" opacity=".7">within decades, one in four on Earth</text>
    </svg>`;
  },

  chinaFlag() {
    return `<svg class="flag" viewBox="0 0 36 24" aria-hidden="true"><rect width="36" height="24" fill="#de2910"/><polygon points="8,6 9.2,9.6 12.8,9.6 9.9,11.8 11,15.2 8,13 5,15.2 6.1,11.8 3.2,9.6 6.8,9.6" fill="#ffde00"/></svg>`;
  },

  ghanaFlag() {
    return `<svg class="flag" viewBox="0 0 36 24" aria-hidden="true"><rect width="36" height="8" fill="#ce1126"/><rect y="8" width="36" height="8" fill="#fcd116"/><rect y="16" width="36" height="8" fill="#006b3f"/><polygon points="18,9 19.1,12.2 22.4,12.2 19.7,14.1 20.8,17.3 18,15.4 15.2,17.3 16.3,14.1 13.6,12.2 16.9,12.2" fill="#000"/></svg>`;
  },

  lineGrowth() {
    return `<svg class="chart" viewBox="0 0 260 90" aria-hidden="true">
      <line x1="28" y1="12" x2="28" y2="74" stroke="#d7dde6"/>
      <line x1="28" y1="74" x2="248" y2="74" stroke="#d7dde6"/>
      <polyline points="32,62 90,48 150,28 236,14" fill="none" stroke="#f15a24" stroke-width="2.4"/>
      <circle cx="236" cy="14" r="3.2" fill="#f15a24"/>
      <polyline points="32,66 90,64 150,60 236,52" fill="none" stroke="#2c6bed" stroke-width="2.4"/>
      <circle cx="236" cy="52" r="3.2" fill="#2c6bed"/>
      <text x="32" y="86" font-size="8" fill="#8a93a3">heartland</text>
      <text x="140" y="86" font-size="8" fill="#8a93a3">buffers</text>
      <text x="214" y="86" font-size="8" fill="#8a93a3">sea</text>
    </svg>`;
  },

  donut(pct = 25, caption = "will be African") {
    const r = 26;
    const c = 2 * Math.PI * r;
    const dash = (pct / 100) * c;
    return `<svg class="chart donut" viewBox="0 0 140 90" aria-hidden="true">
      <circle cx="46" cy="44" r="${r}" fill="none" stroke="#e6ebf2" stroke-width="10"/>
      <circle cx="46" cy="44" r="${r}" fill="none" stroke="#f15a24" stroke-width="10"
        stroke-dasharray="${dash} ${c - dash}" stroke-dashoffset="20" transform="rotate(-90 46 44)"/>
      <text x="46" y="48" text-anchor="middle" font-size="13" font-weight="600" fill="#1a2744">${pct}%</text>
      <text x="86" y="42" font-size="9" fill="#1a2744">1 in 4</text>
      <text x="86" y="54" font-size="8" fill="#8a93a3">${caption}</text>
    </svg>`;
  },

  hbars() {
    const rows = [
      ["Heartland / core", 92, "#f15a24"],
      ["Buffer security", 78, "#2c6bed"],
      ["Naval reach", 70, "#f15a24"],
      ["Through-trade", 18, "#2c6bed"],
      ["Natural harbours", 22, "#f15a24"],
    ];
    return `<svg class="chart" viewBox="0 0 260 100" aria-hidden="true">${rows
      .map(([label, w, color], i) => {
        const y = 8 + i * 18;
        return `<text x="0" y="${y + 8}" font-size="8" fill="#5c6573">${label}</text>
          <rect x="92" y="${y}" width="150" height="8" rx="2" fill="#eef2f7"/>
          <rect x="92" y="${y}" width="${w * 1.5}" height="8" rx="2" fill="${color}"/>`;
      })
      .join("")}</svg>`;
  },

  stacked() {
    return `<svg class="chart" viewBox="0 0 240 80" aria-hidden="true">
      <rect x="20" y="18" width="28" height="16" fill="#2c6bed"/><rect x="20" y="34" width="28" height="30" fill="#f15a24"/>
      <rect x="64" y="28" width="28" height="10" fill="#2c6bed"/><rect x="64" y="38" width="28" height="26" fill="#f15a24"/>
      <rect x="108" y="12" width="28" height="22" fill="#2c6bed"/><rect x="108" y="34" width="28" height="30" fill="#f15a24"/>
      <text x="20" y="76" font-size="7" fill="#8a93a3">area</text>
      <text x="64" y="76" font-size="7" fill="#8a93a3">harbours</text>
      <text x="108" y="76" font-size="7" fill="#8a93a3">unity</text>
      <circle cx="190" cy="28" r="4" fill="#f15a24"/><text x="198" y="31" font-size="8" fill="#5c6573">China</text>
      <circle cx="190" cy="46" r="4" fill="#2c6bed"/><text x="198" y="49" font-size="8" fill="#5c6573">Africa</text>
    </svg>`;
  },

  rings(items) {
    const row = items || [
      [100, "Hu Line"],
      [100, "Buffers"],
      [100, "Navy"],
    ];
    const width = Math.max(130, row.length * 56);
    return `<svg class="chart" viewBox="0 0 ${width} 70" aria-hidden="true">${row
      .map(([pct, label], i) => {
        const x = 28 + i * 52;
        const r = 14;
        const c = 2 * Math.PI * r;
        const dash = (pct / 100) * c;
        const color = pct > 50 ? "#f15a24" : "#2c6bed";
        return `<circle cx="${x}" cy="24" r="${r}" fill="none" stroke="#e6ebf2" stroke-width="5"/>
          <circle cx="${x}" cy="24" r="${r}" fill="none" stroke="${color}" stroke-width="5"
            stroke-dasharray="${dash} ${c - dash}" transform="rotate(-90 ${x} 24)"/>
          <text x="${x}" y="28" text-anchor="middle" font-size="8" fill="#1a2744">${pct}%</text>
          <text x="${x}" y="54" text-anchor="middle" font-size="7" fill="#8a93a3">${label}</text>`;
      })
      .join("")}</svg>`;
  },

  columns() {
    const vals = [18, 34, 42, 70, 48];
    return `<svg class="chart" viewBox="0 0 200 90" aria-hidden="true">
      ${vals
        .map((v, i) => {
          const x = 18 + i * 34;
          const h = v * 0.9;
          return `<rect x="${x}" y="${72 - h * 0.45}" width="14" height="${h * 0.45}" fill="#1a2744"/>
            <rect x="${x}" y="${72 - h}" width="14" height="${h * 0.55}" fill="#f15a24"/>`;
        })
        .join("")}
      <text x="16" y="86" font-size="7" fill="#8a93a3">area</text>
      <text x="50" y="86" font-size="7" fill="#8a93a3">rivers</text>
      <text x="84" y="86" font-size="7" fill="#8a93a3">core</text>
      <text x="118" y="86" font-size="7" fill="#8a93a3">navy</text>
      <text x="152" y="86" font-size="7" fill="#8a93a3">people</text>
    </svg>`;
  },

  steps() {
    const items = ["Similarities", "Differences", "Which would be bigger?", "Why does one develop faster?"];
    return `<svg class="chart" viewBox="0 0 200 110" aria-hidden="true">${items
      .map((label, i) => {
        const y = 14 + i * 24;
        return `<circle cx="12" cy="${y}" r="6" fill="none" stroke="#f15a24" stroke-width="1.6"/>
          <text x="12" y="${y + 3}" text-anchor="middle" font-size="7" fill="#f15a24">${i + 1}</text>
          ${i < items.length - 1 ? `<line x1="12" y1="${y + 7}" x2="12" y2="${y + 18}" stroke="#f15a24" stroke-width="1"/>` : ""}
          <text x="26" y="${y + 3}" font-size="8" fill="#1a2744">${label}</text>`;
      })
      .join("")}</svg>`;
  },

  orgCore() {
    return `<svg class="chart" viewBox="0 0 240 90" aria-hidden="true">
      <rect x="88" y="6" width="64" height="22" rx="11" fill="#1a2744"/>
      <text x="120" y="21" text-anchor="middle" font-size="8" fill="#fff">Han core</text>
      <line x1="120" y1="28" x2="120" y2="40" stroke="#c5ccd6"/>
      <line x1="40" y1="40" x2="200" y2="40" stroke="#c5ccd6"/>
      ${["Tibet", "Xinjiang", "Mongolia", "Sea"]
        .map((label, i) => {
          const x = 16 + i * 56;
          return `<rect x="${x}" y="48" width="48" height="20" rx="10" fill="#fff" stroke="#d5dbe4"/>
            <text x="${x + 24}" y="62" text-anchor="middle" font-size="7" fill="#1a2744">${label}</text>`;
        })
        .join("")}
      <text x="120" y="86" text-anchor="middle" font-size="7" fill="#8a93a3">buffer ring · neighbours kept out</text>
    </svg>`;
  },

  peopleRow() {
    return `<svg class="chart" viewBox="0 0 220 70" aria-hidden="true">
      ${[0, 1, 2, 3]
        .map((i) => {
          const x = 16 + i * 28;
          const fill = i === 0 ? "#f15a24" : "#c5ccd6";
          return `<circle cx="${x}" cy="18" r="7" fill="${fill}"/><rect x="${x - 6}" y="26" width="12" height="16" rx="5" fill="${fill}"/>`;
        })
        .join("")}
      <text x="128" y="28" font-size="18" font-weight="600" fill="#1a2744">1 in 4</text>
      <text x="128" y="44" font-size="8" fill="#8a93a3">will be African</text>
    </svg>`;
  },

  gantt() {
    return `<svg class="chart" viewBox="0 0 320 56" aria-hidden="true">
      <text x="0" y="16" font-size="8" fill="#5c6573">China</text>
      <rect x="48" y="6" width="70" height="10" rx="2" fill="#2c6bed"/>
      <rect x="118" y="6" width="80" height="10" rx="2" fill="#f15a24"/>
      <rect x="198" y="6" width="90" height="10" rx="2" fill="#2c6bed"/>
      <text x="0" y="40" font-size="8" fill="#5c6573">Africa</text>
      <rect x="48" y="30" width="50" height="10" rx="2" fill="#c5d3f0"/>
      <rect x="108" y="30" width="40" height="10" rx="2" fill="#f7b199"/>
      <rect x="168" y="30" width="120" height="10" rx="2" fill="#c5d3f0"/>
      <text x="48" y="54" font-size="7" fill="#8a93a3">barriers</text>
      <text x="168" y="54" font-size="7" fill="#8a93a3">imposed borders</text>
      <text x="250" y="54" font-size="7" fill="#8a93a3">+1bn people</text>
    </svg>`;
  },
};
