# MusicCatalog

React music catalog frontend that searches Last.fm album tags, lists top albums, shows artist pages, and opens album track details in a modal.

## Stack

- Vite 8
- React 18
- React Router 6
- Redux 5 with React-Redux 9
- Bootstrap 5 with React-Bootstrap 2
- Vitest with jsdom

## Requirements

- Node 24 LTS
- npm 11 or compatible npm version bundled with Node 24

## Scripts

### `npm start`

Starts the Vite development server. By default, open the local URL printed by Vite, usually `http://localhost:5173`.

### `npm test`

Runs the Vitest test suite once through `scripts/test.js`.

The wrapper ignores CRA's old `--watchAll` flag, so this command remains valid:

```sh
npm.cmd test -- --watchAll=false
```

### `npm run build`

Creates a production build in `dist/`.

## Project Layout

- `index.html`: Vite HTML entrypoint.
- `src/index.jsx`: React application bootstrap.
- `src/App.jsx`: top-level router and layout.
- `src/components/`: UI components.
- `src/actions/`: Redux action creators.
- `src/reducers/`: Redux reducers.
- `docs/react-upgrade-plan.md`: upgrade execution log and verification notes.

## Verification

After dependency or source changes, run:

```sh
npm.cmd test -- --watchAll=false
npm.cmd run build
```

The upgraded baseline has been verified with passing tests, a successful production build, and a Vite dev-server HTTP 200 boot check.
