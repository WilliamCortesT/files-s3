const { Router } = require("express");
const { uploadBucket } = require("../controllers/uploadBucket.controller");

const router = Router();

router.post("/", uploadBucket);

module.exports = router;
