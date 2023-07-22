const bodyParser = require("body-parser");
const { log } = require("console");
const express= require ("express");
const https =require("https");
const { dirname } = require("path");
const app = express();
const date= require(__dirname + "/date.js")
let items=["Eat food","Sleep Well","Watch Manga"];
let workItems=[];
let animeList=["Youjo Senki"];
let hentaiList=[];
let webtoonList=[];
let mangaList=[];
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))

app.set('view engine','ejs')
app.get("/",function(req,res){
let day =date.getDate();
    res.render("list",{kindofday : day,newItem: items}); 
});

app.post("/",function(req,res){
    let a=req.body.newPost;
    if(req.body.button==="work"){
        workItems.push(a);
        res.redirect("/work");
    } else if(req.body.button==="Your"){
        animeList.push(a);
        res.redirect("/anime");
    } else if(req.body.button==="Manga"){
        mangaList.push(a);
        res.redirect("/manga");
    } else if(req.body.button==="Webtoon"){
        webtoonList.push(a);
        res.redirect("/webtoon");
    } else if(req.body.button==="Hentai"){
        hentaiList.push(a);
        res.redirect("/hentai");
    }else{
        items.push(a)
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{kindofday: "work List",newItem: workItems})
});

app.get("/anime",function(req,res){
    res.render("list",{kindofday :"Your Anime list" , newItem: animeList})
})
app.get("/manga",function(req,res){
    res.render("list",{kindofday :"Manga list" , newItem: mangaList})
})
app.get("/webtoon",function(req,res){
    res.render("list",{kindofday :"Webtoon list" , newItem: webtoonList})
})
app.get("/hentai",function(req,res){
    res.render("list",{kindofday :"Hentai list" , newItem: hentaiList})
})
app.listen(3000,function(){
    console.log("Port is working");
});
