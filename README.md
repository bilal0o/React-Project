# o4bgchanger 🎨

A tiny React + Vite demo that lets you change the full-page background color by clicking preset buttons. Built with React, Vite, and Tailwind CSS for quick styling.

---

## 🔧 Features

- Simple, single-component app (`src/App.jsx`) that uses React state to store the current background color.
- Preset color buttons (Green, Red, Yellow, Pink, Purple) that update the background when clicked.
- Tailwind CSS utility classes for layout and button styling.
- Zero-config dev environment using Vite (fast HMR).

---

## 🚀 Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open http://localhost:5173/ in your browser.

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint the code

```bash
npm run lint
```

---

## 📁 Project structure (relevant files)

- `index.html` — App entry
- `src/main.jsx` — React entry file
- `src/App.jsx` — Main component (background color changer)
- `src/index.css` / `src/App.css` — Styles (Tailwind utilities + custom CSS)

---

## 💡 How `src/App.jsx` works

- The component uses `useState` to hold the current `color` (default: `blue`).
- The container `<div className="w-full h-screen" style={{ backgroundColor: color }}>` applies the selected color as an inline style to cover the viewport.
- Each button calls `setColor("colorName")` in its `onClick` handler to update the state.

Example button:

```jsx
<button
  className="px-3 py-1 rounded-3xl text-white outline-none"
  style={{ backgroundColor: "purple" }}
  onClick={() => setColor("purple")}
>
  Purple
</button>
```

---

## ✍️ Adding or customizing colors

- To add a new color button, add a new `<button>` inside the buttons container and set `style={{ backgroundColor: "<color>" }}` and `onClick={() => setColor("<color>")}`.
- Consider color contrast and accessibility (make sure text is readable on the background color). You can use CSS classes instead of inline styles for more control.

---

## ♿ Accessibility notes

- Buttons have clear labels and large click targets; however, consider adding `aria-pressed` or visually indicated focus states if you expand the UI.
- If using custom colors, verify sufficient contrast for users with low vision.

---

## 🧪 Testing & development tips

- This is a minimal demo and currently has no automated tests. For component testing, add `vitest` or `jest` and `@testing-library/react`.
- Use the dev server (`npm run dev`) to iterate quickly with HMR.

---

## 📦 Dependencies

Key packages used:

- `react`, `react-dom` — UI library
- `vite` — dev server + build tooling
- `tailwindcss` — utility-first CSS

See `package.json` for full dependency list.

---

## Contributing

Small improvements or PRs are welcome — e.g., add more colors, accessibility fixes, or test coverage.

---

## License

This project is unlicensed (add a license if you intend to publish it).

---

If you'd like, I can also add a short `docs/` page or an example screenshot to this repo. ✅