const { Router } = require("express");
const { download } = require("../controllers/download.controller");
const router = Router();

router.get("/", download);

module.exports = router;
