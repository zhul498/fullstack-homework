# React Tutorial: Tic-Tac-Toe

My completed version of the official React tutorial, [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe) on react.dev.

**Status: complete.** I finished every section, including "Adding time travel".

## How to run

```bash
cd hw3/react
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## How to test

1. Click squares. The marks should alternate X and O, and the status line should show the next player.
2. Clicking a square that's already filled does nothing.
3. Get three in a row. The status should change to `Winner: X` (or `O`), and the board should stop accepting moves.
4. Use the move list on the right ("Go to move #N") to jump back to an earlier move. Making a new move from there replaces the later history.

## What the tutorial covers

- **Components and props:** `Square`, `Board` and `Game` are function components that pass data down through props.
- **State:** `useState` holds the board history and the current move.
- **Lifting state up:** the state lives in `Game`, and `Board` and `Square` get values and click handlers through props.
- **Immutability:** each move copies the squares array (`slice()`) instead of changing it, which is what makes time travel possible.
- **Lists and keys:** the move history is rendered with `map()`, and each item has a `key`.

## Files

- `src/App.jsx`: all the tutorial code (`Square`, `Board`, `Game`, `calculateWinner`)
- `src/index.css`: the tutorial's `styles.css`
- `src/main.jsx`: Vite entry point that renders `<App />`

## Issues and changes from the tutorial

- **Local setup instead of CodeSandbox.** The tutorial's "download the sandbox" option for working locally gave me an empty zip. Instead I created the project with Vite (`npm create vite@latest react -- --template react`), put the tutorial's `App.js` code in `src/App.jsx` and its `styles.css` in `src/index.css`.
- I deleted the Vite starter files I didn't need (`App.css`, `assets/`).
