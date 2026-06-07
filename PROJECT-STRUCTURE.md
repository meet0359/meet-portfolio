# Portfolio Website – Project Structure

This document describes the folder layout for publishing and maintaining the multi-developer portfolio site.

## Root

- **package.json** – Dependencies and scripts (`npm run dev`, `npm run build`, `npm run resume:pdf`)
- **vite.config.ts**, **tsconfig.json**, etc. – Build and tooling config
- **index.html** – App entry
- **README.md** – Project overview and run instructions

## `src/` – Application code

- **main.tsx**, **App.tsx** – Bootstrap and routing
- **data/portfolio.ts** – All developer profiles (Keval, Roushan, Sagar, Satyam): bio, experience, education, skills, projects
- **context/ProfileContext.tsx** – Active profile and routing
- **components/portfolio/** – Hero, Navbar, Experience, Projects, Skills, Education, Contact, Footer
- **components/ui/** – Shared UI (buttons, dropdowns, etc.)
- **pages/** – PortfolioPage, Index, NotFound
- **assets/** – Profile images (keval-profile.png, roushan-profile.png, etc.)
- **lib/**, **hooks/** – Utilities and hooks

## `public/` – Static assets (served as-is)

- **favicon.ico**, **robots.txt**, **placeholder.svg** – Site-wide
- **resume/** – Resumes and related files, **per developer**:
  - **resume/keval/** – Keval Panchasara
    - `Keval-Panchasara-Resume.html` – Resume (open or Print → PDF)
    - `Keval-Panchasara-Resume.pdf` – Generated PDF (run `npm run resume:pdf`)
    - `keval-resume-photo.png` – Photo used in resume
    - `RESUME-README.md` – How to view and regenerate PDF
  - Add **resume/krishna/**, **resume/roushan/**, **resume/sagar/**, **resume/satyam/** when needed.

## `content/` – Developer-specific content (not served by the app)

- **developers/keval/** – Keval
  - `upwork-profile.md` – Upwork title, overview, skills, one-liner
  - Add other docs (e.g. cover-letter templates) here.
- **developers/krishna/** – Krishna Patel (Full Stack Developer)
- Add **developers/roushan/**, **developers/sagar/**, **developers/satyam/** when needed.

## `scripts/`

- **generate-resume-pdf.js** – Builds `public/resume/keval/Keval-Panchasara-Resume.pdf` from the HTML resume. Run: `npm run resume:pdf`. Requires Puppeteer.

## Publishing

1. **Build:** `npm run build` → output in `dist/`
2. **Deploy** the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.)
3. Resume PDF and HTML are under `dist/resume/keval/` and will be at `https://your-domain.com/resume/keval/Keval-Panchasara-Resume.html` (and `.pdf`).

## Adding another developer

1. Add their profile in `src/data/portfolio.ts` (and add to `profiles` array).
2. Create `public/resume/<developer-id>/` with their resume HTML, PDF, photo, and README if needed.
3. Create `content/developers/<developer-id>/` for their docs (Upwork, etc.).
4. Update `scripts/generate-resume-pdf.js` or add a new script if they have a separate resume HTML.
