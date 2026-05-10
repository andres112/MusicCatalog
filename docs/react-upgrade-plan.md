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
