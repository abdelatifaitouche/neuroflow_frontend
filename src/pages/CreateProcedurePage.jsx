


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

    const [ProcedureData , setProcedureData] = useState({title : '' , description : '' , content : '' , department : 0  , status : '' , version : 0})


    const [departements , setDepartements] = useState([])

    


    const fetchDepartements = async () =>{
        const departements_list = await getDepartement();
        setDepartements(departements_list)
    }

    useEffect(()=>{
        fetchDepartements()
     } , [])


     const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(ProcedureData)
        createProcedure(ProcedureData);

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
        setProcedureData((prev)=>({...prev , department : value}))
      }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Departements" />
            </SelectTrigger>
            <SelectContent>
                
            <SelectItem value="1">DG</SelectItem>
            <SelectItem  value="2">RH</SelectItem>
            </SelectContent>
        </Select>
<input placeholder='status' onChange={(e)=>{
        setProcedureData((prev)=>({...prev , status : e.target.value}))
      }}/>

<input placeholder='version' onChange={(e)=>{
        setProcedureData((prev)=>({...prev , version : e.target.value}))
      }}/>
    <Button type="submit">Create</Button>
    
    </form>      
    </div>
  )
}

export default CreateProcedurePage
