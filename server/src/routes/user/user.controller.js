const users=require("../../model/user.model")
const bcrypt=require("bcrypt")
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'root',
      database : 'discord'
    }
});


async function loginUser(req,res){
    const {email,password}=req.body;
    let hash=await knex('users').select('userpassword').where("email","=",email);
    if(hash[0]===undefined){
        res.status(401).json({error:"not exist"});
    }else{
        hash=hash[0].userpassword;
        bcrypt.compare(password, hash,async function(err, result) {
            await knex.select('*').from('users').where({
                email:email,
                userpassword:password
            });
            if(result){
                res.status(200).json({error:"success"})
            }else{
                res.status(401).json({error:"not exist"});
            }
        });
    }
}
async function registerUser(req,res){
    const {email,username,password,day,month,year}=req.body;
    const userData=req.body;
    // to make empty string null
    for(let key in userData){
        if(userData[key]===""){
            userData[key]=null
        }
    }
    const dob=year&&month&&day?`${year}-${month}-${day}`:null;
    console.log(password);
    bcrypt.hash(password, 2, async function(err, hash) {
        //store in database
        try {
        // query the table...
        // insert into users (user_name,email,userpassword,dob) VALUES ("username","email","password","dob");

        const insertedRows = await knex('users').insert({ user_name:username,email:email,userpassword:hash,dob:dob });
        return res.status(201).json([{message:"success"}]);
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

