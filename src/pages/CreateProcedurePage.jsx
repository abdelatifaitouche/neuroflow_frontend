


import React , {useEffect, useState} from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { createProcedure } from '@/services/proceduresService'
import { Button } from '@/components/ui/button'
import { getDepartement } from '@/services/departementService'

function CreateProcedurePage() {

    const [ProcedureData , setProcedureData] = useState({title : '' , description : '' , content : '' , department : 0 , owner : 1 , status : '' , version : 0})


    const [departements , setDepartements] = useState([])

    const procedure = {
        title : "created from the frontend 2 " , 
        description : 'testing' , 
        content : 'testing'  , 
        department : 1 , 
        owner : 1 , 
        status : "Draft" , 
        version : 1
    }


    const fetchDepartements = async () =>{
        const departements_list = await getDepartement();
        setDepartements(departements_list)
    }

    useEffect(()=>{
        fetchDepartements()
     } , [])


     const handleSubmit = (e)=>{
        e.preventDefault();

     }

  return (
    <div>
    <form onSubmit={handleSubmit} className='flex flex-col gap-2' >

        
      <input placeholder='Title' onChange={(e)=>{
        setProcedureData((prev)=>({...prev , title : e.target.value}))
      }}/>

<input placeholder='description' onChange={(e)=>{
        setProcedureData((prev)=>({...prev , description : e.target.value}))
      }}/>

<input placeholder='content' onChange={(e)=>{
        setProcedureData((prev)=>({...prev , content : e.target.value}))
      }}/>

      
      
      <Select onValueChange={(value)=>{
        console.log(value)
        setDepartements(value)
      }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Departements" />
            </SelectTrigger>
            <SelectContent>
                
                {
                    departements.map((departement)=>{
                        return <SelectItem key={departement.id} value={departement.id}>{departement.departement_name}</SelectItem>
                    })
                }
            </SelectContent>
        </Select>
      <input placeholder='status'/>


      <input placeholder='version'/>

    <Button type="submit">Create</Button>
    
    </form>      
    </div>
  )
}

export default CreateProcedurePage
