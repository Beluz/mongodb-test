
exports.getWorld = function(req,res){
     res.json({result: "Hello World! Beluz is here! from controller  😤😱🥵🤡", data: [
        req.params.foo,
        req.params.bar
    ]});
}

exports.postWorld = function(req,res){
    res.json({result: "The POST request was sent", data: req.body});
}