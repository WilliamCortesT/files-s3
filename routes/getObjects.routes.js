const { Router } = require("express");
const { getObjects } = require("../controllers/getObjects.controller");

const router = Router();

router.get("/:bucket", getObjects);

module.exports = router;
