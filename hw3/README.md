# HW 3: Full Stack Frameworks and Libraries

This folder contains my work for HW 3. For the tutorials I chose **Option 1** (two shorter tutorials): React and Socket.IO. For the exercise I built a React app that uses the **Rick and Morty API**. Each project is in its own subfolder with its own `package.json` and its own README.

| Folder | What it is | Source |
| --- | --- | --- |
| [`react/`](react/) | Tic-tac-toe game with move history ("time travel") | [react.dev: Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe) |
| [`socketio/`](socketio/) | Real-time chat app | [Socket.IO: Basic chat application](https://socket.io/docs/v4/tutorial/introduction) |
| [`rickandmorty/`](rickandmorty/) | **Exercise:** React app with `/home`, `/characters`, `/species` and `/locations` routes | [Rick and Morty API](https://rickandmortyapi.com/documentation) |

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS; developed with v22)
- npm (comes with Node.js)

## Setup

Dependencies are **not** committed (`node_modules/` is in `.gitignore`), so install them first. From this `hw3/` folder:

```bash
npm run install:all
```

This runs `npm install` inside each project folder. You can also run `npm install` in each folder by hand.

## Running each project

From this `hw3/` folder:

| Command | What it does | Open |
| --- | --- | --- |
| `npm run react` | Starts the Vite dev server for tic-tac-toe | http://localhost:5173 |
| `npm run socketio` | Starts the Express + Socket.IO chat server | http://localhost:3000 |
| `npm run rickandmorty` | Starts the Vite dev server for the Rick and Morty exercise | http://localhost:5173 |

Stop any server with `Ctrl+C`. The two Vite apps both default to port 5173, so if one is already running, Vite picks the next free port and prints it. Each subfolder's README has more detail and testing steps.

## Folder structure

```
hw3/
├── README.md          ← this file
├── package.json       ← helper scripts for running each project
├── package-lock.json
├── .gitignore         ← ignores node_modules/, .env, build output, local DBs
├── react/             ← React tic-tac-toe tutorial (Vite)
├── socketio/          ← Socket.IO chat tutorial (Express)
└── rickandmorty/      ← Rick and Morty API exercise (React + Vite + React Router)
```
