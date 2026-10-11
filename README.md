# China vs Africa — Prisoners of Geography

A gallery of six vertical infographic options.

- Copy is locked from `CHINA_TEXT_ALL_FINAL` — every version uses that wording, not a rewrite
- Diagrams (Hu Line, buffers, Nine-Dash, north–south break, 1 in 4) follow the A3 poster
- Visual systems come from P1, P3, and the three separate designs inside P4

P4 is not one 3-column poster. It is a kit of three sheets: a market-trends report, a monthly progress report, and a numbered key-insights infographic.

## View

```bash
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

## Print (A4)

Each option is one A4 portrait sheet (210 × 297 mm). Print with **background graphics** on, paper **A4**, orientation **Portrait**, margins **None**.

From the gallery, use **Print this A4** under a version, or **Print all 6 sheets**. You can also open a print-ready URL:

- `/?print=option-a3`
- `/?print=option-flat`
- `/?print=option-vintage`
- `/?print=option-report`
- `/?print=option-progress`
- `/?print=option-insights`
- `/?print=all`

Ready-made sheets live in `print/`:

- `print/01-a3-diagram.pdf` — Option 1, A3 diagram edition
- `print/02-flat-kit.pdf` — Option 2, flat kit (after P1)
- `print/03-banner-map.pdf` — Option 3, banner + map (after P3)
- `print/04-market-report.pdf` — Option 4, market-trends report (after P4a)
- `print/05-progress-report.pdf` — Option 5, monthly progress report (after P4b)
- `print/06-key-insights.pdf` — Option 6, key insights (after P4c)
- `print/all-sheets.pdf` — all six pages

Regenerate them with `./scripts/print-a4.sh`.

`landscape.html` is the earlier 16:9 experiment.
