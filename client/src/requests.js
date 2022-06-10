const API_URL="http://localhost:8000";

export const getUserForLogin=async(email,password)=>{
    console.log(email,password);
    const response=await fetch(`${API_URL}/sign-in`);
    return await response.json();
} 


export default getUserForLogin;