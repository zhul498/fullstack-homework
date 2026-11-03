# Socket.IO Tutorial: Basic Chat Application

My version of the official Socket.IO tutorial, [Basic chat application](https://socket.io/docs/v4/tutorial/introduction). It's a chat page where messages appear in real time for everyone connected.

**Status:** completed through the **Broadcasting** step: project setup, serving the HTML page, connecting Socket.IO, sending events and broadcasting them. I did not do the later optional steps (connection state recovery, saving messages to SQLite, scaling across multiple servers).

## How to run

```bash
cd hw3/socketio
npm install
npm start
```

The terminal prints `listening on *:3000`. Open http://localhost:3000.

## How to test

1. Open http://localhost:3000 in **two** browser tabs (or two different browsers).
2. Type a message in one tab and press **Send**.
3. The message should appear in **both** tabs right away, without refreshing.

## How it works

- `index.js`: an Express app wrapped in a Node `http` server, with a Socket.IO `Server` attached to it.
  - `GET /` serves `index.html`.
  - When a client sends a `chat message` event, the server sends it to every connected client with `io.emit`.
- `index.html`: the chat page. It loads the client library from `/socket.io/socket.io.js`, which the Socket.IO server serves automatically.
  - On submit, the page sends the input's value with `socket.emit('chat message', ...)`.
  - When a `chat message` arrives, the page adds it as an `<li>` and scrolls to the bottom.

## Dependencies

- [`express`](https://expressjs.com/) v4, the version the tutorial uses
- [`socket.io`](https://socket.io/) v4
