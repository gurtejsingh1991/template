module.exports.getPage=(req,res)=>{
    res.send("welcome to controller file");
}


module.exports.newPage=(req,res)=>{
    res.send("Welcome to another new page");
}

module.exports.openPage=(req,res)=>{
    // res.sendFile(__dirname+"/form.html")
    res.render("../views/form");
}


module.exports.getData=(req,res)=>{
    var userInfo={
        name:req.body.username,
        email:req.body.email,
        loc:req.body.location,
        prof:req.body.profile
    }
    res.render("../views/result",{data:userInfo})
}