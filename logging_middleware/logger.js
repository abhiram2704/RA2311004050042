const axiosLib = require("axios");

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhazUwNTJAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDUxNCwiaWF0IjoxNzc3Njk5NjE0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWMxNmMwMWYtZWVjNy00OWY4LThkN2EtOWNmMzgyZmM4ZTQ4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia290aGEgYWJoaXJhbSByZWRkeSIsInN1YiI6ImM4MDdlMTYwLTU0N2ItNDNlZS04MDk4LTRlNmVjYWEyYmI5NSJ9LCJlbWFpbCI6ImFrNTA1MkBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImtvdGhhIGFiaGlyYW0gcmVkZHkiLCJyb2xsTm8iOiJyYTIzMTEwMDQwNTAwNDIiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJjODA3ZTE2MC01NDdiLTQzZWUtODA5OC00ZTZlY2FhMmJiOTUiLCJjbGllbnRTZWNyZXQiOiJmclFoTVZFUFBTd3JNQlFTIn0.vUwTAN22mrdFmL2n7jzhDMNSzIIVCyEdlzp-2eyZ8BY";

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
