const API_URL="http://localhost:8000";

export const getUserForLogin=async(email,password)=>{
    console.log(email,password);
    const response=await fetch(`${API_URL}/sign-in`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password})
    });
    return response;
} 


export default getUserForLogin;