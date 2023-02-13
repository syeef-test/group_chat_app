const express = require("express");

const router = express.Router();

const fs = require("fs");

router.get("/", (req, res, next) => {
  //console.log(req.body);

  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat Exists";
    }
      res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <input id="message" name="message" type="text" placeholder="message">
    <input type="hidden" id="username" name="username"><button type="submit">send</button></form>`);
    
    
  });
});
router.post("/", (req, res, next) => {
  //data.push(`{${req.body.username}:${req.body.message}}`);
  //console.log(data);
  //console.log(req.body);  //working

  fs.writeFile(
    "username.txt",
    `${req.body.username}:${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );

  //res.redirect("/");
});

module.exports = router;
