import { io } from "socket.io-client";
import { REDNDER_URL } from "./url.js";

const sessionId = localStorage.getItem("sessionId") || Date.now().toString();
localStorage.setItem("sessionId", sessionId);

export const socket = io(`${REDNDER_URL}`, {
  query: { sessionId },
  withCredentials: true,
});
