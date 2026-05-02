const expressFramework = require("express");
const appServer = expressFramework();

appServer.use(expressFramework.json());

const vehicleList = [];
const servicePlans = [];

// Register a new vehicle
appServer.post("/vehicles", (req, res) => {
  const { ownerName, vehicleNumber, type } = req.body;

  const newVehicle = {
    id: vehicleList.length + 1,
    owner: ownerName,
    number: vehicleNumber,
    category: type
  };

  vehicleList.push(newVehicle);
  res.status(201).json(newVehicle);
});

// Create a service booking
appServer.post("/schedule", (req, res) => {
  const { vehicleId, serviceType, date } = req.body;

  const newPlan = {
    id: servicePlans.length + 1,
    vehicleRef: vehicleId,
    service: serviceType,
    scheduledDate: date
  };

  servicePlans.push(newPlan);
  res.status(201).json(newPlan);
});

// Retrieve schedules for a vehicle
appServer.get("/schedule/:vehicleId", (req, res) => {
  const vehicleId = req.params.vehicleId;

  const filteredPlans = servicePlans.filter(
    (item) => item.vehicleRef == vehicleId
  );

  res.json(filteredPlans);
});

const SERVER_PORT = 4000;

appServer.listen(SERVER_PORT, () => {
  console.log(`Scheduler service active on port ${SERVER_PORT}`);
});