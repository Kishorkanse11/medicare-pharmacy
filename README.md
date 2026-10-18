# MediCare — Pharmacy Catalog Demo

A responsive fictional pharmacy catalog. The project includes a no-install fallback and the React/Vite source project.

## Fastest way to open it (no Node.js or npm needed)

Double-click `RUN-ME-FIRST.html`. It runs directly in a modern browser and includes all six products, live search, category filtering, sorting, and an interactive cart. This is a standalone browser version for previewing the UI.

## Run the React + Vite project

1. Install Node.js 18 or newer from https://nodejs.org/.
2. Open a terminal in the `medicare-pharmacy` folder (the folder containing `package.json`).
3. Run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Hosting

- For a quick static preview, upload `RUN-ME-FIRST.html` to a static host after renaming it to `index.html` in its own folder.
- To deploy the React version to Vercel or Netlify, build it with `npm run build` and publish the generated `dist` folder.

## Included functionality

- Six fictional mock products with neutral descriptions.
- Live search by product name, category, description, or badge.
- Combined category filtering and price sorting.
- Cart quantities, remove actions, item count, and computed subtotal.
- Responsive navigation, cart drawer, empty states, notifications, keyboard Escape close, and focus indicators.
- Checkout intentionally remains a demo notice; no orders, payments, accounts, backend, or pharmacy operations are implemented.
"# medicare-pharmacy" 
