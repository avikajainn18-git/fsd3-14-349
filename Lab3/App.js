import http from "http";
import { getAllTeams } from "./teams.js";
import { resolve } from "dns";

const PORT = 5000

const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, { "content-type": "application/json" });
    res.end(data === "undefined" ? "" : JSON.stringify(data));
};
const parseJSONBody = (req) => {
    new Promise((resolve,reject)=> {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk.toString();
    });
    req.on("end", () => {
        try {
            resolve(bosy ? JSON.parse(body) : {});
        }
        catch (error) {
            reject(error);
        }
    });
 });
};
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method == 'GET') {
        const teams = getAllTeams();
        console.log("Teams: ", teams);
        
        res.write(JSON.stringify(teams));
    }
    else {
        res.statusCode = 404;
    }
        res.end();
});

server.listen(PORT, () => {
    console.log("SIH Sever is running at ", PORT);
})