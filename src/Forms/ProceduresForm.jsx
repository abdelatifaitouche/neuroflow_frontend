


import React , {useState} from 'react'
import { Button } from '@/components/ui/button'

function ProcedureForm(){

    const [ProcedureData , setProcedureData] = useState({title : '' , description : '' , content : '' , department : 0 , owner : 1 , status : '' , version : 0})
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log("submited")
    }
  
  
    return(
    <form onSubmit={handleSubmit} className='flex flex-col gap-2' >
  
  
      <input value={ProcedureData.title} onChange={(e)=>{setProcedureData((prevData)=>({...prevData , title:e.target.value}))}} placeholder='Title'/>
      <input placeholder='description'/>
      <input placeholder='content'/>
      <input placeholder='departement'/>
      <input placeholder='status'/>
      <input placeholder='version'/>
      
      <Button>Create</Button>
  
    </form>
    

);
  }


  export default ProcedureForm ; 