# Tomorrow™ — Procrastination Tax Calculator

> Your procrastination has a price. Calculate it. Then do something about it.

Tomorrow™ is a playful, privacy-friendly productivity tool that turns postponed tasks into a visible "procrastination tax". Enter a task, how many times you've delayed it, and the average delay per postponement. Get an estimate of time lost, remaining work, a few tiny next steps, and a lovingly brutal roast.

## Features

- **Procrastination tax:** estimates cumulative delay from postponement count × average delay.
- **Remaining-work estimate:** enter the work still required in minutes or hours.
- **Tiny-step generator:** turns a task into a short, editable-feeling sequence of starter actions.
- **Excuse roast:** a rotating collection of playful one-liners.
- **Start-now timer:** a 25-minute focus session with pause, resume, and reset.
- **Task history:** saves recent calculations locally in your browser.
- **Privacy-first:** no account, backend, analytics, or external dependencies. Your history stays in localStorage.

## Run locally

No build step required.

1. Clone the repository.
2. Open `index.html` in a browser, or run a local static server:

   ```bash
   python -m http.server 8000
   ```

3. Visit http://localhost:8000.

## Deploy with GitHub Pages

The included GitHub Actions workflow publishes the static site whenever changes are pushed to `main`.

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push to `main` (or rerun the Pages workflow).
4. Your site will be available at `https://dhairyabansal-dev.github.io/Tomorrow-Procrastination-Tax-Calculator/` once the workflow completes.

## Calculation model

- **Time lost** = postponements × average delay per postponement.
- **Remaining work** = the estimate you enter; Tomorrow™ does not pretend to infer task complexity from a sentence.
- The time-lost figure is an estimate, not a measurement of productive hours. It represents elapsed delay between attempts.

## Project structure

```
.
├── index.html
├── styles.css
├── js/
│   ├── app.js
│   ├── calculator.js
│   ├── task-breakdown.js
│   └── roast-engine.js
├── tests/
│   └── calculator.test.js
├── .github/workflows/
│   └── pages.yml
├── LICENSE
└── README.md
```

## License

MIT. See [LICENSE](LICENSE).
