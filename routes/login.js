const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  
  // res.send(
  //   '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input type="text" name="username" id="username"><button type="submit">Add</button></form>'
  // );
  res.send(
    `<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/login" method="POST">
    <input type="text" name="username" id="username"><button type="submit">Add</button></form>`
  );

});


router.post("/login", (req, res, next) => {
    //console.log(req.body);    //working
    res.redirect('/');
  });

module.exports = router;
