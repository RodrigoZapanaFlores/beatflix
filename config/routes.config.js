const express = require("express");
const router = express.Router();
const beats = require("../controllers/beatflix.controllers");





router.get('/beats', beats.list);
router.get("/beats/new", beats.new);
router.get("/beats/:id", beats.detail);
router.post("/beats", beats.create);
router.post("/beats/:id/delete", beats.delete);



module.exports = router;
