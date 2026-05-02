const expressModule = require("express");

const notificationApp = expressModule();

// Health check endpoint
notificationApp.get("/", (request, response) => {
  response.status(200).send("Notification system is active");
});

const PORT_NUMBER = 5000;

notificationApp.listen(PORT_NUMBER, () => {
  console.log(`Notification service is live on port ${PORT_NUMBER}`);
});