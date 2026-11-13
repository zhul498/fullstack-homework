# Exercise: Rick and Morty Explorer (React)

A small React app that uses the [Rick and Morty API](https://rickandmortyapi.com/documentation) (free, no API key). Built with Vite and React Router.

## How to run

```bash
cd hw3/rickandmorty
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). It sends you to `/home`.

## Routes

| Route | What it shows | API calls |
| --- | --- | --- |
| `/home` | Welcome message and a description of each page | none |
| `/characters` | The first 100 characters as cards: picture, name, species, status | `GET /character?page=1` … `page=5` (20 per page), in parallel |
| `/species` | Each species with its character count and the names of those characters, largest group first | same 100 characters as `/characters` |
| `/locations` | Number of locations of each type, in a table, most common first | `GET /location`, then the remaining pages in parallel |

## Handling incomplete data

- **Missing, empty and "unknown" values:** some API values are empty strings (one location has `type: ""`) or the literal word `"unknown"`. The `orUnknown()` helper turns all of them into `Unknown`, so they're grouped together instead of making a blank group and a duplicate "unknown" group.
- **Missing images:** a character without an `image` shows a gray "No image" box instead of a broken image.
- **Missing results:** if a page has no `results` array, it's treated as empty (`?? []`).
- **Location page count:** the number of location pages comes from `info.pages` on the first response instead of being hard-coded, so new locations are still counted.
- **Failed requests:** if a request fails (network error or non-200 response), the page shows an error message instead of crashing. Every page also shows `Loading...` while it waits.

## Files

```
src/
├── main.jsx            ← renders <App /> inside <BrowserRouter>
├── App.jsx             ← nav bar and route definitions
├── api.js              ← fetch functions plus groupBy / orUnknown helpers
├── useFetch.js         ← custom hook: runs a fetch once, tracks data / error / loading
├── Status.jsx          ← shared loading / error message
├── index.css           ← styles
└── pages/
    ├── Home.jsx
    ├── Characters.jsx
    ├── Species.jsx
    └── Locations.jsx
```

## Design decisions

- **React instead of Pug,** so I could reuse what I learned in the React tic-tac-toe tutorial.
- **Fetching in parallel:** the 5 character pages and the remaining location pages are requested together with `Promise.all`, which is faster than one at a time.
- **`useFetch` hook:** all three data pages need the same loading, error and data logic, so it lives in one custom hook. It also ignores late responses if you leave the page before the data arrives.
- **One `groupBy` helper** is used by both `/species` (group by species) and `/locations` (group by type).
