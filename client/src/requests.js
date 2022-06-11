const API_URL="http://localhost:8000";

export const postUserForLogin=async(email,password)=>{
    const response=await fetch(`${API_URL}/sign-in`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password})
    });
    return await response.status;
} 
export const postUserForRegister=async(email,password,username,day,month,year)=>{
    const response=await fetch(`${API_URL}/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password,username,day,month,year})
    });
    return [await response.json(),response.status];
} 


export default postUserForLogin;