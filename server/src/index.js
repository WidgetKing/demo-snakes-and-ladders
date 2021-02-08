// const express = require("express");
// const app = express();
// const port = 3000;

// const server = app.listen(port, () => {
//   console.log("Server is running on localhost:" + port);
// });
const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", console.log);
});

const port = process.env.PORT || 8080;

http.listen(port, () => console.log(`listening on http://localhost:${port}`));
