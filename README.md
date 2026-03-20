# Rama Sai Anudeep Itha — Portfolio

A React + Vite developer portfolio with particle animations, custom cursor, loading screen, AI chatbot, and dark blue theme.

## Project Structure
```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component — wires all sections together
├── styles/
│   └── global.css            # Global styles, keyframes, shared classes
├── data/
│   └── index.js              # All portfolio content (skills, experience, education, contact)
└── components/
    ├── ParticleCanvas.jsx    # Animated particle network background
    ├── CustomCursor.jsx      # Custom dot + trailing ring cursor
    ├── GlitchText.jsx        # Glitch animation text
    ├── Typer.jsx             # Terminal typewriter effect
    ├── Section.jsx           # Scroll-triggered fade-in section wrapper
    ├── SkillBar.jsx          # Animated skill percentage bars
    ├── ExpCard.jsx           # Expandable experience cards
    ├── Navbar.jsx            # Fixed top navigation
    ├── LoadingScreen.jsx     # Boot sequence loading screen
    ├── Hero.jsx              # Hero / landing section (+ resume download button)
    ├── About.jsx             # About me + code block visual
    ├── Skills.jsx            # Tech stack + skill bars
    ├── Experience.jsx        # Work history timeline
    ├── Projects.jsx          # Key technical projects
    ├── Education.jsx         # Education cards
    ├── Contact.jsx           # Contact links
    ├── Footer.jsx            # Footer
    └── Chatbot.jsx           # AI assistant powered by Claude API
netlify/
└── functions/
    └── chat.js               # Serverless function — proxies Claude API (production)
public/
├── favicon.ico               # Multi-size favicon (16×16 + 32×32)
├── favicon.svg               # Vector favicon (modern browsers)
├── favicon_64.png            # Apple touch icon
└── Rama_Sai_Anudeep_Itha_Resume.pdf  # Downloadable resume
server.js                     # Express proxy server (local dev only)
.env                          # Local environment variables (never commit)
netlify.toml                  # Netlify build + functions config
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Set up environment variable
Create a `.env` file in the project root:
```
ANTHROPIC_API_KEY=sk-ant-...
```
Get your API key at [console.anthropic.com](https://console.anthropic.com).

### Run locally (Vite + Express proxy together)
```bash
npm run dev:all
```
Or in two separate terminals:
```bash
# Terminal 1
npm run dev

# Terminal 2
npm run server
```

Vite runs on `http://localhost:5173`, Express proxy on `http://localhost:3001`.

### Build for production
```bash
npm run build
```

## Deploying to Netlify

1. Push your repo to GitHub
2. Connect the repo in the [Netlify dashboard](https://app.netlify.com)
3. Add your API key under **Site → Site configuration → Environment variables**:
```
   ANTHROPIC_API_KEY=sk-ant-...
```
4. Netlify auto-builds using `netlify.toml` — the `netlify/functions/chat.js` serverless function handles all Claude API calls securely

## Features

- **Loading screen** — terminal boot sequence with progress bar before the portfolio renders
- **Particle network** — animated canvas background with connecting lines
- **Custom cursor** — dot + trailing ring with hover effects
- **AI chatbot** — Claude-powered assistant (bottom-right bubble) that answers questions based on the resume
- **Resume download** — one-click PDF download from the Hero section
- **Scroll animations** — sections fade in on scroll via IntersectionObserver
- **Expandable cards** — click-to-expand experience and project cards
- **Animated skill bars** — trigger on scroll into view

## Updating Content

All portfolio content lives in **`src/data/index.js`**. Edit that one file to update skills, experience, education, contact links, hero tags, or typewriter lines — no component files need touching.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run server` | Start Express proxy (needed for chatbot locally) |
| `npm run dev:all` | Start both Vite and Express together |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |