# Rama Sai Anudeep Itha — Portfolio

A React + Vite developer portfolio with particle animations, custom cursor, and dark blue theme.

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component — wires all sections together
├── styles/
│   └── global.css        # Global styles, keyframes, shared classes
├── data/
│   └── index.js          # All portfolio content (skills, experience, education, contact)
└── components/
    ├── ParticleCanvas.jsx # Animated particle network background
    ├── CustomCursor.jsx   # Custom dot + trailing ring cursor
    ├── GlitchText.jsx     # Glitch animation text
    ├── Typer.jsx          # Terminal typewriter effect
    ├── Section.jsx        # Scroll-triggered fade-in section wrapper
    ├── SkillBar.jsx       # Animated skill percentage bars
    ├── ExpCard.jsx        # Expandable experience cards
    ├── Navbar.jsx         # Fixed top navigation
    ├── Hero.jsx           # Hero / landing section
    ├── About.jsx          # About me + code block visual
    ├── Skills.jsx         # Tech stack + skill bars
    ├── Experience.jsx     # Work history timeline
    ├── Education.jsx      # Education cards
    ├── Contact.jsx        # Contact links
    └── Footer.jsx         # Footer
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Updating Content

All portfolio content lives in **`src/data/index.js`**. Edit that one file to update:
- Skills and proficiency levels
- Work experience entries
- Education records
- Contact links
- Hero tags and typewriter lines

No need to touch any component files for content changes.
