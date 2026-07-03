# 🎬 CineTrack — Movie Watchlist & Review App

CineTrack is a client-side React.js application for managing a personal movie watchlist. Users can add movies, mark them as watched/unwatched, delete entries, filter by status, and search in real time — all powered by local/mock data with `localStorage` persistence.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the App](#-running-the-app)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Usage Guide](#-usage-guide)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

- **Dashboard View** — Responsive grid of movie cards showing Title, Genre, Release Year, and Poster (via URL). Each card has "Mark as Watched" and "Delete" actions.
- **Add Movie Form** — Client-side validated form to add new movies (prevents empty/invalid submissions).
- **Status Filter** — Tab/dropdown control to filter movies by Watched / Unwatched / All.
- **Live Search** — Real-time client-side filtering by movie title as you type.
- **Loading States** — Simulated async delay on initial load with skeleton/spinner UI for a realistic UX.
- **Persistent State** — Movie data is saved to `localStorage`, so your list survives page refreshes.

---

## 🛠 Tech Stack

- **React.js** (functional components + hooks)
- **Tailwind CSS** (or standard CSS, depending on implementation)
- **localStorage** for state persistence (no backend/database required)

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your machine:

| Tool | Minimum Version | Check Command |
|------|------------------|----------------|
| Node.js | v16.x or higher | `node -v` |
| npm | v8.x or higher | `npm -v` |

> If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/) — npm is bundled with it automatically.

---

## 🚀 Installation & Setup

Follow these steps to get CineTrack running locally:

### 1. Clone or Download the Project

```bash
git clone https://github.com/rashedulislam595/CINETRACK
cd CINETRACK
```

> If you received the project as a ZIP file instead, extract it and `cd` into the extracted folder.

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will read `package.json` and install React, Tailwind (if used), and all other dependencies into a local `node_modules/` folder.

### 3. Environment Setup (if applicable)

CineTrack uses only local/mock data by default, so **no environment variables or API keys are required**. If your version connects to an external API for posters/data, create a `.env` file in the root directory:

```env
REACT_APP_API_KEY=your_api_key_here
```

---

## ▶️ Running the App

Start the local development server:

```bash
npm start
```

This will:
- Compile the React application
- Launch a local dev server (usually at `http://localhost:3000`)
- Automatically open the app in your default browser
- Enable hot-reloading — changes to source files refresh the browser instantly

If port `3000` is already in use, your terminal will prompt you to run on an alternate port — press `Y` to accept.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at `http://localhost:3000` |
| `npm run build` | Builds an optimized production bundle into the `build/` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run lint` | Runs linting checks (if configured) |

> **Note:** If your project was scaffolded with Vite instead of Create React App, use `npm run dev` instead of `npm start`.

---

## 📁 Project Structure

```
cinetrack/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieForm.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SearchBar.jsx
│   │   └── LoadingSkeleton.jsx
│   ├── data/
│   │   └── mockMovies.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 📖 Usage Guide

1. **Viewing Movies** — On load, a brief simulated loading state (skeleton cards/spinner) appears before the dashboard renders your movie grid.
2. **Adding a Movie** — Fill in the Add Movie form (Title, Genre, Year, Poster URL) and submit. Empty or invalid fields will be blocked with inline validation messages.
3. **Marking as Watched** — Click "Mark as Watched" on any card to toggle its status. The button label/state updates instantly.
4. **Deleting a Movie** — Click "Delete" on a card to remove it permanently from your list.
5. **Filtering** — Use the Status Filter (Watched / Unwatched / All) to narrow down the dashboard view.
6. **Searching** — Type in the search bar to instantly filter movies by title, combinable with the active status filter.

---

## 🐞 Troubleshooting

**Issue: `npm install` fails with permission errors**
```bash
sudo npm install   # macOS/Linux only, use with caution
```

**Issue: Port 3000 already in use**
```bash
# Kill the process using the port (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or simply accept the prompt to run on a different port
```

**Issue: Blank page after `npm start`**
- Check the browser console for errors.
- Ensure `node_modules` was installed correctly by deleting it and running `npm install` again:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue: Changes not reflecting in browser**
- Hard refresh with `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac).
- Restart the dev server (`Ctrl + C` then `npm start` again).

---

## 📄 License

This project was built as part of a Frontend Developer technical evaluation.