const webServer = require("express");
const schedulerApp = webServer();

schedulerApp.use(webServer.json());

let cars = [];
let bookings = [];

// Home endpoint
schedulerApp.get("/", (req, res) => {
  res.status(200).send("Service Scheduler is operational");
});

// Add a vehicle
schedulerApp.post("/vehicles", (req, res) => {
  const { ownerName, vehicleNumber, type } = req.body;

  const vehicleData = {
    id: cars.length + 1,
    ownerName,
    vehicleNumber,
    type
  };

  cars.push(vehicleData);
  return res.status(201).json(vehicleData);
});

// Book a service
schedulerApp.post("/schedule", (req, res) => {
  const { vehicleId, serviceType, date } = req.body;

  const booking = {
    id: bookings.length + 1,
    vehicleId: Number(vehicleId),
    serviceType,
    date
  };

  bookings.push(booking);
  return res.status(201).json(booking);
});

// Fetch bookings by vehicle
schedulerApp.get("/schedule/:id", (req, res) => {
  const id = Number(req.params.id);

  const results = bookings.filter((entry) => entry.vehicleId === id);

  if (results.length === 0) {
    return res.status(404).json({ message: "No schedules found" });
  }

  res.json(results);
});

const PORT = 4000;

schedulerApp.listen(PORT, () => {
  console.log(`Scheduler API is running at http://localhost:${PORT}`);
});
