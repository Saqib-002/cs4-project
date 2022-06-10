const users=require("../../model/user.model")

function getUser(req,res){
    console.log(req.body);
    res.status(200).json(users)
}

module.exports={
    getUser
};

