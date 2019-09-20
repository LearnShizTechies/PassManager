import express from "express";
import http from "http";
import app from "./app";
 
//Use system configuration for port or use 6001 by default.
const port = process.env.port || 5000;
 
//Create server with exported express app
const server = http.createServer(app);
server.listen(port, () => console.log("Its up on"+ port));