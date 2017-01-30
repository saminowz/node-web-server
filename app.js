const express=require("express");
const hbs=require("hbs");
const fs=require("fs");
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
app.listen(3000,()=>{
  console.log("SErver starting in port 3000")
})
