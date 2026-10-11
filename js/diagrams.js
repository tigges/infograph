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
      <text x="168" y="124" font-size="9">Yunnan</text>
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
      <text x="130" y="112" font-size="8" opacity=".7">an extra billion to house, feed, employ</text>
    </svg>`;
  },

  chinaFlag() {
    return `<svg class="flag" viewBox="0 0 36 24" aria-hidden="true"><rect width="36" height="24" fill="#de2910"/><polygon points="8,6 9.2,9.6 12.8,9.6 9.9,11.8 11,15.2 8,13 5,15.2 6.1,11.8 3.2,9.6 6.8,9.6" fill="#ffde00"/></svg>`;
  },

  ghanaFlag() {
    return `<svg class="flag" viewBox="0 0 36 24" aria-hidden="true"><rect width="36" height="8" fill="#ce1126"/><rect y="8" width="36" height="8" fill="#fcd116"/><rect y="16" width="36" height="8" fill="#006b3f"/><polygon points="18,9 19.1,12.2 22.4,12.2 19.7,14.1 20.8,17.3 18,15.4 15.2,17.3 16.3,14.1 13.6,12.2 16.9,12.2" fill="#000"/></svg>`;
  },
};
