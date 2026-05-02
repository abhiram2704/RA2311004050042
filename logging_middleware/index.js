const expressLib = require("express");
const sendLog = require("./logger");

const server = expressLib();
server.use(expressLib.json());

// Root endpoint
server.get("/", async (req, res) => {
  try {
    await sendLog("backend", "info", "route", "Home endpoint accessed");
    res.status(200).send("Service is up");
  } catch (e) {
    console.error("Logging issue:", e.message);
    res.status(500).send("Internal issue");
  }
});

// Error simulation endpoint
server.get("/error", async (req, res) => {
  try {
    await sendLog("backend", "error", "handler", "Triggered error route");
    res.status(500).send("Something failed");
  } catch (e) {
    console.error("Logging issue:", e.message);
    res.status(500).send("Internal issue");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});