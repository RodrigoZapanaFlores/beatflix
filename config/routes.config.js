const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const { beats, auth, users }= require("../controllers");
const secure = require('../middlewares/secure.mid');

//nuevo
router.get('/', beats.main);
//nuevo

router.get("/beats", secure.isAuthenticated, beats.list);
router.get("/beats/myList", secure.isAuthenticated, beats.myList);
router.get("/beats/new", secure.isAuthenticated, beats.new);
router.get("/beats/:id", secure.isAuthenticated, beats.detail);
router.post("/beats", secure.isAuthenticated, upload.fields([{name: 'image', maxCount: 1},{name: 'audio', maxCount: 1}]), beats.create);
router.post("/beats/:id/delete", secure.isAuthenticated, beats.delete);

router.get('/register', auth.register);
router.post('/register', auth.doRegister);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);

router.post('/logout', auth.logout)
router.get('/users/:id', secure.isAuthenticated, users.userDetail);
router.get("/users/:id/confirm", users.confirm);




module.exports = router;