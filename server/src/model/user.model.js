const config=require("./knex.config")
const db = require('knex')(config);


async function gethash(user){
    let hash=await db.select('userpassword').from('users').where("email","=",user.email);
    return hash[0];
}
async function getUser(email,hash){
    let responseUser=await db.select('*').from('users').where({
        email:email,
        userpassword:hash
    });
    return responseUser;
}
async function insertUser(username,email,dob,hash){
        // query the table...
        // insert into users (user_name,email,userpassword,dob) VALUES ("username","email","password","dob");
        const insertedUser = await db('users').insert({ user_name:username,email:email,userpassword:hash,dob:dob });
        return insertedUser;
}
module.exports={
    gethash,
    getUser,
    insertUser
}

