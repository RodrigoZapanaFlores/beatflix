const express = require("express");
const router = express.Router();
const { beats, auth, users }= require("../controllers");

const secure = require('../middlewares/secure.mid');

router.get('/beats', secure.isAuthenticated, beats.list);
router.get("/beats/new", secure.isAuthenticated, beats.new);
router.get("/beats/:id", secure.isAuthenticated, beats.detail);
router.post("/beats", secure.isAuthenticated, beats.create);
router.post("/beats/:id/delete", secure.isAuthenticated, beats.delete);

router.get('/register', auth.register);
router.post('/register', auth.doRegister);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);

router.get('/users/:id', secure.isAuthenticated, users.detail);
router.get("/users/:id/confirm", users.confirm);


module.exports = router;
