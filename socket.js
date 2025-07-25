import { io } from "socket.io-client";
import { API_URL } from "./src/url.js";

const sessionId = localStorage.getItem("sessionId") || Date.now().toString();
localStorage.setItem("sessionId", sessionId);

export const socket = io(`${API_URL}`, {
  query: { sessionId },
  withCredentials: true,
});
