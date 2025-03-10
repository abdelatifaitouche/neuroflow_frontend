import { createContext , useEffect, useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom"
import { toast } from "sonner"
import AXIOS_CONFIG from '../utils/axiosConfig'


//we have private routes that a non auth user cannot access


//for this we need to login a user (already done that)


const AuthContext  = createContext()

export default AuthContext;

export  const AuthProvider = ({children}) =>{

    const [isAuthenticated , setIsAuthenticated] = useState(null)
    const navigate = useNavigate()

    // maybe i should add the login here
    const aixosInstance = axios.create({
        baseURL : 'http://127.0.0.1:8000' ,
        withCredentials : true , 
        headers: {
          "Content-Type": "application/json",
        },
      })

    let login = async (e)=> {
            e.preventDefault();
            await AXIOS_CONFIG.post("token/" , {
              email : e.target.email.value , 
              password : e.target.password.value
            },
            {withCredentials : true},
         ).then((response)=>{
            
                if(response.status === 200){
                    navigate('/')
                    setIsAuthenticated(true)
                }

             
            }).catch((error)=>{
                toast("failed to login")
            })
        
    }


    
    let verifyToken = async () => {
        try {
            const response = await AXIOS_CONFIG.post("auth/verify/");
            if (response.status === 200) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            setIsAuthenticated(false);
            console.error("Token verification failed:", error);
        }
    };
    
    // Only verify if the user is not already logged out
    useEffect(() => {
        if (isAuthenticated !== false) {
            verifyToken();
        }
    }, []);
    

    

    //and logout here


    let logout = async () => {
        //send a request to api/auth/logout

        await AXIOS_CONFIG.post("auth/logout/" , null).then((response)=>{
            if (response.status === 200){
                setIsAuthenticated(false)
                setTimeout(() => {
                    window.location.href = "/login"; // Hard refresh ensures cookies are cleared
                }, 500);  // Wait 500ms before redirecting
            
            }
        })
    }



    let contextData = {
        logout : logout,
        login : login , 
        verifyToken : verifyToken,
        isAuthenticated : isAuthenticated
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}


