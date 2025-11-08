const express = require("express");
const ProvidersRoute = require("./ProvidersRoute");
const router = express().router;

router.get("/test", (req, res) => {
  return res.send({ message: "Hello from Server App...👋" });
});

router.use(ProvidersRoute);

module.exports = router;
