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
        await aixosInstance.post("api/auth/verify/").then((response)=>{
            if(response.status === 200){
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false)
            }
        })
       
    }

    useEffect(()=>{
        verifyToken();
    } , [])

    //and logout here


    let logout = () => {
        //send a request to api/auth/logout

        aixosInstance.post("api/auth/logout/" , {withCredentials : true}).then((response)=>{
            if (response.status == 200){
                navigate('/login')
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


