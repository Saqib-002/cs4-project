const users=require("../../model/user.model")
const bcrypt=require("bcrypt")
const {
    gethash,
    getUser,
    insertUser
}= require("../../model/user.model");


async function loginUser(req,res){
    const {email,password}=req.body;
    let hash=await gethash(req.body);
    if(hash===undefined){
        res.status(401).json({error:"not exist"});
    }else{
        hash=hash.userpassword;
        bcrypt.compare(password, hash,async function(err, result) {
            let user=await getUser(email,hash);
            user=user[0];
            if(result){
                res.status(200).json(user)
            }else{
                res.status(401).json({error:"not exist"});
            }
        });
    }
}
async function registerUser(req,res){
    const {email,username,password,day,month,year}=req.body;
    const userData=req.body;
    const dob=year&&month&&day?`${year}-${month}-${day}`:null;
    console.log(password);
    bcrypt.hash(password, 2, async function(err, hash) {
        //store in database
        try {
            await insertUser(username,email,dob,hash);
            return res.status(201).json({username,email,dob,hash});
        } catch(e) {
        if(e.constraint==="un_username"||e.constraint==="un_email"){
            res.status(409).json({error:e.constraint});
        }
      };
    });
    
}
module.exports={
    loginUser,
    registerUser
};

