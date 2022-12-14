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
router.get("/beats/:id/detail", beats.detail);
router.post("/beats", secure.isAuthenticated, upload.single("audio"), beats.create);
router.post("/beats/:id/delete", secure.isAuthenticated, beats.delete);

router.get('/register', auth.register);
router.post('/register', auth.doRegister);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);

router.post('/logout', (req, res, next) => {
    req.session.destroy(err => {
      if (err) next(err);
      res.redirect('/');
    });
  });

router.get("/users/:id/userDetail", secure.isAuthenticated, users.userDetail);
router.get("/users/:id/confirm", users.confirm);




module.exports = router;