const axiosLib = require("axios");

const AUTH_TOKEN = "PASTE_YOUR_TOKEN_HERE";

async function sendLog(logStack, logLevel, sourcePackage, logMessage) {
  const url = "http://20.207.122.201/evaluation-service/logs";

  const payload = {
    stack: logStack,
    level: logLevel,
    package: sourcePackage,
    message: logMessage
  };

  const config = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      "Content-Type": "application/json"
    }
  };

  try {
    const result = await axiosLib.post(url, payload, config);
    console.log("Log successfully sent:", result.data);
  } catch (err) {
    const errorMsg = err.response ? err.response.data : err.message;
    console.error("Error while sending log:", errorMsg);
  }
}

module.exports = sendLog;