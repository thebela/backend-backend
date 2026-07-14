const http= require("http");
const contact = "pls dont try to contact me i alrrady have a beautiful gf thank u and she will not  like mde talking to anyone else.";
const homepage = "this is to inform that i Aman is learing backend";
const about="BELA,BACKEND ENGINEER,or to be the best backend and devops engineer";
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
    res.end(homepage);
    }
    else if(req.url==="/about"){
        res.end(about);
    }
    else if(req.url==="/contact"){
        res.end(contact);
    }
    else{
    res.statusCode = 404;
    res.end("404 Page Not Found");
    }
});

server.listen(3001);
console.log("server is running on port 3001");

