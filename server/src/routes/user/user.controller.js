const users=require("../../model/user.model")

function getUser(req,res){
    console.log(req.body);
    const user=req.body;
    
    if(user.email===users[0].email){
        res.status(200).json(users)
    }else{
        res.status(404).json({error:"no user exist"})
    }
}

module.exports={
    getUser
};

