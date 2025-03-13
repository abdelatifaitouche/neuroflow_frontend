


import { getProcessDetails } from '@/services/processService'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";



function ProcessDetails() {
    const { id } = useParams();


    const [processData , setProcessData] = useState(null)


    const fetchProcessData = async (id) => {
        try {
            const data = await getProcessDetails(id)
            console.log(data)
            setProcessData(data)
        }catch(error){
            return 
        }
    }

    useEffect(()=>{
        fetchProcessData(id)
    }, [])




  return (
    <div>
        <p>{processData?.process_name}</p>
        <ul>
            {
                processData?.tasks.map((task)=>{
                    return  <li>{task.title}</li>
                })
            }
           
        </ul>
    </div>
  )
}

export default ProcessDetails
