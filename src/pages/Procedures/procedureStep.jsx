import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function ProcedureStep() {


  const [step , setStep] = useState({procedure : "" , step_number : "" , title : "" , content : "" , writer : '' , validator : '' , is_validated:''})

  
  return (
    <div>
      <form>
        
      <Input value={step.title} onChange={(e)=>{
          setStep((prev)=>({...prev , title : e.target.value}))
      }}/>  

      <Input value={step.step_number} onChange={(e)=>{
          setStep((prev)=>({...prev , step_number : e.target.value}))
      }}/>  

 
<Select onValueChange={(value)=>{
        setStep((prev)=>({...prev , department : value}))
      }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Departements" />
            </SelectTrigger>
            <SelectContent>
                
            <SelectItem value="1">DG</SelectItem>
            <SelectItem  value="2">RH</SelectItem>
            </SelectContent>
        </Select>
        
        
        
      </form>  

    </div>
  )
}

export default ProcedureStep
