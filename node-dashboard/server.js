const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const HOST = "127.0.0.1";

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.json({
        status: "online",
        app: "Human Detection Smart Surveillance",
        runtime: "Node.js"
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    console.log("Health API: /api/health");
});
