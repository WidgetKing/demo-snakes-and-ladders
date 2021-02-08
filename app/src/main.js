import App from "./App.svelte";
import { io } from "socket.io-client";

const PORT = 8080;
const socket = io(`ws://localhost:${PORT}`);

socket.emit("message", "Hello server");
const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;

