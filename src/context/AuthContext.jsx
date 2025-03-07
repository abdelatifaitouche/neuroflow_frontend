import { createContext , useEffect, useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom"

//we have private routes that a non auth user cannot access


//for this we need to login a user (already done that)


const AuthContext  = createContext()

export default AuthContext;

export  const AuthProvider = ({children}) =>{

    const [isAuthenticated , setIsAuthenticated] = useState(null)
    const navigate = useNavigate()

    const [authTokens , setAuthTokens] = useState({})

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
            await axios.post("http://127.0.0.1:8000/api/token/" , {
              email : e.target.email.value , 
              password : e.target.password.value
            },
            {withCredentials : true},
         ).then((response)=>{
              setAuthTokens(response.data)
              console.log(response.data)
              if(authTokens){
                navigate('/')
                setIsAuthenticated(true)
              }
            })
        
    }


    
    let verifyToken = async () => {
        try {
            const response = await aixosInstance.post("api/auth/verify/");
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

        await aixosInstance.post("api/auth/logout/" , null).then((response)=>{
            if (response.status === 200){
                /*
                document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";*/

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


