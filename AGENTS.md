# MusicCatalog Agent Notes

## Project Shape

- Vite frontend with root `index.html`, source in `src/`, and static assets in `public/`.
- Main entry points are `src/index.jsx` and `src/App.jsx`.
- UI components live in `src/components/`.
- Redux actions live in `src/actions/`; reducers live in `src/reducers/`.
- The app uses React 18, Redux 5, React-Redux 9, React Router 6, Bootstrap 5, React-Bootstrap 2, Vite 8, and Vitest.

## Commands

- `npm start` runs the Vite development server.
- `npm test` runs Vitest once through `scripts/test.js`.
- `npm.cmd test -- --watchAll=false` is supported for compatibility with the previous CRA workflow.
- `npm run build` creates a production build in `dist/`.

## Working Rules

- Keep changes focused and match the current functional component style.
- Use React Router 6 APIs (`Routes`, `Route element`, `useParams`) for routing changes.
- Use React 18 root APIs for rendering changes.
- Do not reintroduce CRA-specific files, scripts, `%PUBLIC_URL%` placeholders, or `react-scripts`.
- Avoid touching `node_modules/`, `dist/`, build output, caches, logs, or local environment files.
- Prefer small component-level changes and verify with `npm test` or `npm run build` when practical.
