# Tomorrow™ — Procrastination Tax Calculator ⏰

> Your procrastination has a price. Calculate it. Then do something about it.

Tomorrow™ is a lightweight, browser-based productivity tool that turns postponed tasks into a visible “procrastination tax”. Enter a task, how many times you have delayed it, and the average delay per postponement. The app estimates elapsed time lost, shows your remaining-work estimate, suggests tiny starter steps, and gives you a playful roast to help you get moving.

## Features

- **Procrastination tax:** postponements × average delay per postponement.
- **Remaining-work estimate:** enter the work you believe is still required.
- **Tiny-step generator:** suggests a short starting sequence based on the task.
- **Playful roasts:** humorous messages based on your postponement count.
- **25-minute focus timer:** start, pause, resume, and reset.
- **Local task history:** keeps recent calculations in your browser.
- **Privacy-friendly:** no account, backend, analytics, or third-party runtime dependencies. History is stored in browser localStorage.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript (no framework)
- Node.js built-in test runner for the calculator tests
- GitHub Actions + GitHub Pages for hosting

## Quick start

You do **not** need to install React, Vite, or any frontend framework. This is a static website.

### Requirements

- A computer running Windows, macOS, or Linux.
- [Visual Studio Code](https://code.visualstudio.com/) (recommended editor).
- [Git](https://git-scm.com/downloads) to clone the repository.
- A modern browser such as Chrome, Edge, Firefox, or Safari.
- [Node.js 18 or newer](https://nodejs.org/) only if you want to run the automated tests.
- Python 3 is optional; it can be used to run a local web server.

## Run the project in VS Code

### 1. Download the project

Open a terminal (PowerShell on Windows, Terminal on macOS/Linux) and run:

```bash
git clone https://github.com/dhairyabansal-dev/Tomorrow-Procrastination-Tax-Calculator.git
```

### 2. Open the folder in VS Code

```bash
cd Tomorrow-Procrastination-Tax-Calculator
code .
```

If the `code` command is not available, open VS Code manually, choose **File → Open Folder**, and select the cloned `Tomorrow-Procrastination-Tax-Calculator` folder.

### 3. Start the website

**Option A — VS Code Live Server extension (easy):**

1. In VS Code, open Extensions (Ctrl+Shift+X).
2. Search for **Live Server** and install the extension by Ritwick Dey.
3. Open `index.html`.
4. Click **Go Live** in the VS Code status bar.
5. Your browser should open the local website (usually at `http://127.0.0.1:5500`).

**Option B — Python local server (no VS Code extension):**

Open the VS Code terminal (**Terminal → New Terminal**) and run:

```bash
python -m http.server 8000
```

On some Windows installations, use:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Keep the terminal running while you use the site; press **Ctrl+C** to stop the server.

**Option C — open the HTML file directly:**

Double-click `index.html` or use **Open with Live Server** if available. A local server is recommended for a more browser-like development environment.

## Run the automated tests

Install Node.js 18 or newer, then open a terminal in the project root:

```bash
npm test
```

The tests use Node's built-in `node:test` runner. No `npm install` is required because the project has no external npm dependencies.

## Project structure

```text
Tomorrow-Procrastination-Tax-Calculator/
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Pages deployment workflow
├── js/
│   └── calculator-node.cjs    # Node-compatible calculator logic for tests
├── tests/
│   └── calculator.test.js     # Automated calculator tests
├── app.js                     # Browser application logic and interactions
├── index.html                 # Main page and app structure
├── styles.css                 # Layout, styling, and responsive design
├── package.json               # Project metadata and npm test command
├── .gitignore
├── LICENSE                    # MIT License
└── README.md                  # This documentation
```

## How the calculation works

- **Estimated elapsed delay** = number of postponements × average delay per postponement.
- **Remaining work** = the estimate entered by the user. The app does not infer task complexity from the task description.
- The procrastination tax is an estimate of elapsed delay, **not a measurement of productive hours**.
- Delay units can be hours, days, or weeks. Remaining-work units can be minutes, hours, or workdays (as offered by the interface).

## Deploy with GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. It runs when code is pushed to `main`, and can also be started manually from the Actions tab.

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** if it is not already selected.
4. Open the **Actions** tab and select **Deploy Tomorrow to GitHub Pages** to see the deployment run.
5. When the run is green, open the deployed site:

   **https://dhairyabansal-dev.github.io/Tomorrow-Procrastination-Tax-Calculator/**

The workflow now asks the Pages configuration action to enable Pages if it has not been enabled yet. If GitHub does not allow the workflow token to enable the Pages site, a repository administrator must complete steps 2–3 once, then rerun the workflow.

### If deployment fails

- Open **Actions → Deploy Tomorrow to GitHub Pages → the failed run**.
- Open the failed job and expand the first red step.
- If the error says the Pages site was not found or Pages is not enabled, complete **Settings → Pages → Source → GitHub Actions**, then rerun the workflow.
- If the deploy job reports an environment or permission error, check that the workflow has `pages: write` and `id-token: write` permissions and that the repository allows GitHub Actions.
- Wait for the workflow to finish before treating the Pages URL as live.

## Making changes

1. Edit the relevant file in VS Code.
2. Save and refresh the local browser page.
3. Run `npm test` if you changed the calculator logic.
4. Commit and push your changes:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

A successful push to `main` triggers the GitHub Pages workflow.

## Privacy and data

The app runs in the user's browser. Recent task calculations are stored in that browser's localStorage. There is no application server or account system. Clearing browser site data may remove the saved history; using another browser or device will not share it.

## Credits

- **Coder:** Poorvi Gupta
- **Project:** Tomorrow™ — Procrastination Tax Calculator

## License

MIT. See [LICENSE](LICENSE).
