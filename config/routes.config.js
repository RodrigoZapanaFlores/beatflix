const express = require("express");
const router = express.Router();
const {beats, auth }= require("../controllers");

router.get('/beats', beats.list);
router.get("/beats/new", beats.new);
router.get("/beats/:id", beats.detail);
router.post("/beats", beats.create);
router.post("/beats/:id/delete", beats.delete);

router.get('/register', auth.register);
router.post('/register', auth.doRegister);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);


module.exports = router;
