const express=require("express");
const hbs=require("hbs");
const fs=require("fs");
const port=process.env.PORT || 3000;
var app=express();
app.set("view engine","hbs");
app.use((req,res,next)=>{
  res.render("fix.hbs")
  fs.appendFile("server.log",req.method+" The path is "+req.url+"\n");
})
app.use(express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
  res.render("home.hbs");
})
hbs.registerHelper("date",(text)=>{
  return text+new Date().getFullYear();
})
hbs.registerPartials(__dirname+"/views/partials");
app.listen(port,()=>{
  console.log("SErver starting in port "+port)
})
