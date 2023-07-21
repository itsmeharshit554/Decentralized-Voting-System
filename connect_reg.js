const express=require("express");
const bodyParser=require("body-parser");
const Web3 = require('web3');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use("/public", express.static(__dirname + "/public", {
  setHeaders: function (res, path, stat) {
    if (path.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css");
    } else if (path.endsWith(".js")) {
      res.setHeader("Content-Type", "application/javascript");
    }
  }
}));

app.get("/main",function(req,res)
{
    console.log(req);
    res.sendFile(__dirname+"/index.html");
    // console.log(address);
})
app.get("/reg",function(req,res)

{
    console.log(req);

    res.sendFile(__dirname+"/reg.html");
})


app.listen(2000,function()
{
    console.log("The code is running on port 2000");
})