import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

function Home() {

    const [procedures , setProcedures] = useState([])

    const API_URL = "http://127.0.0.1:8000/api/procedures/procedures_list/"

    useEffect(()=>{
        axios.get(API_URL).then((response)=>setProcedures(response.data.response))
    } , [])



  return (
    <div>
      <h1>Home Page</h1>
      {
        procedures.map((procedure)=>{
            return <p key={procedure.id}>{procedure.title}</p>
        })
      }
    </div>
  )
}

export default Home
