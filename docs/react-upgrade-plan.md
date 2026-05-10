# React Upgrade Execution Log

## Baseline

- Current runtime: Node 24.12.0, npm 11.6.2.
- Current build tool: Create React App via `react-scripts@5.0.1`.
- Current top-level packages: React 16.9, React Router 5.0, Redux 4.0, React-Redux 7.1, Bootstrap 4.3, React-Bootstrap 1.6.
- Baseline build before changes: `npm.cmd run build` succeeds with React hook dependency warnings.
- Baseline test before changes: `npm.cmd test -- --watchAll=false` fails because `App.test.js` renders `<App />` without Redux `Provider`.

## Stage 1 - Baseline Test Fix

Planned changes:

- Wrap `App` in `Provider` in `src/App.test.js`.
- Use the existing reducers to create the test store.

Verification:

- `npm.cmd test -- --watchAll=false`: passed.
- `npm.cmd run build`: passed with existing hook dependency warnings.

Diff summary:

- `src/App.test.js`: imports `Provider`, `createStore`, and app reducers; wraps the smoke-test render in a Redux provider.

## Stage 2 - Vite Migration

Planned changes:

- Replace `react-scripts` scripts with Vite scripts.
- Add Vite, React plugin, Vitest, and jsdom dev dependencies.
- Add root `index.html` and `vite.config.js`.
- Remove the obsolete CRA template at `public/index.html`.
- Rename JSX-bearing source files from `.js` to `.jsx` for Vite 8/Rolldown parsing.
- Add `scripts/test.js` to keep `npm.cmd test -- --watchAll=false` compatible by filtering the old CRA flag.

Verification:

- `npm.cmd test -- --watchAll=false`: passed.
- `npm.cmd run build`: passed.

Diff summary:

- `package.json`: removes `react-scripts`; adds Vite/Vitest tooling and updates scripts.
- `package.json`: removes stale CRA `eslintConfig`.
- `index.html`: adds Vite entrypoint loading `/src/index.jsx`.
- `public/index.html`: removed because Vite uses the root HTML entrypoint.
- `vite.config.js`: configures React plugin with classic JSX runtime for React 16 and Vitest jsdom globals.
- `scripts/test.js`: runs Vitest while ignoring CRA's `--watchAll` flag.
- `src/**/*.jsx`: JSX-bearing files renamed from `.js` to `.jsx`.

## Stages 3-6 - React, Router, Bootstrap, and Redux Upgrades

Planned changes:

- Upgrade runtime libraries to React 18, React DOM 18, React Router 6, Bootstrap 5, React-Bootstrap 2, Redux 5, and React-Redux 9.
- Replace `ReactDOM.render` with `createRoot`.
- Replace React Router 5 `Switch`, `component`, and `match` usage with Router 6 `Routes`, `element`, and `useParams`.
- Replace React-Bootstrap 1 `FormControl` and `InputGroup.Append` usage with React-Bootstrap 2-compatible `Form.Control` and direct button/link composition.
- Keep the existing Redux reducer and action structure.

Installed versions:

- `react@18.3.1`, `react-dom@18.3.1`
- `react-router-dom@6.30.3`
- `bootstrap@5.3.8`, `react-bootstrap@2.10.10`
- `redux@5.0.1`, `react-redux@9.2.0`

Verification:

- `npm.cmd test -- --watchAll=false`: passed.
- `npm.cmd run build`: passed.
- `npm.cmd ls react react-dom react-router-dom bootstrap react-bootstrap redux react-redux --depth=0`: passed.
- Vite dev server boot check at `http://127.0.0.1:5173/`: passed with HTTP 200.

Diff summary:

- `src/index.jsx`: uses React 18 `createRoot`.
- `src/App.test.jsx`: uses React 18 root API for the smoke test.
- `src/App.jsx`: uses React Router 6 route definitions.
- `src/components/Albums.jsx` and `src/components/Artist.jsx`: use `useParams` instead of route `match` props.
- `src/components/Search.jsx`: uses Bootstrap 5-compatible React-Bootstrap form components.
- `.gitignore`: ignores Vite `dist/` output.
