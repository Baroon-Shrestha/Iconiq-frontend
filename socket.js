import { io } from "socket.io-client";

const sessionId = localStorage.getItem("sessionId") || Date.now().toString();
localStorage.setItem("sessionId", sessionId);
const API_URL = import.meta.env.RENDER_URL;

export const socket = io(`${API_URL}`, {
  query: { sessionId },
  withCredentials: true,
});
