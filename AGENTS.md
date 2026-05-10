# MusicCatalog Agent Notes

## Project Shape

- Create React App frontend in `src/` with static assets in `public/`.
- Main entry points are `src/index.js` and `src/App.js`.
- UI components live in `src/components/`.
- Redux actions live in `src/actions/`; reducers live in `src/reducers/`.
- The app uses React 16, Redux, React Router 5, Bootstrap 4, and `react-scripts` 5.

## Commands

- `npm start` runs the development server.
- `npm test` runs the CRA test runner in watch mode.
- `npm run build` creates a production build in `build/`.

## Working Rules

- Keep changes focused and match the current class component / function component mix.
- Do not refactor unrelated CRA boilerplate or generated service worker code unless the task requires it.
- Avoid touching `node_modules/`, build output, caches, logs, or local environment files.
- Prefer small component-level changes and verify with `npm test` or `npm run build` when practical.
