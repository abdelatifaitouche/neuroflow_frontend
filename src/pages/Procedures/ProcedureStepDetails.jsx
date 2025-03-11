import { Input } from "@/components/ui/input";
import { getStepById } from "@/services/proceduresService";
import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

function ProcedureStepDetails() {

  const {stepID} = useParams()
  const [stepData , setStepData] = useState({})

  useEffect(()=>{

    const fetchStepDetails = async () =>{
      try {
        const data = await getStepById(stepID)
        setStepData(data)
        
      }catch(error){
        console.log(error)
      }
    }

    fetchStepDetails();

  } , [])


  return <div>
    <h1>Procedure step details</h1>
    <Input value={stepData.title}/>
    <Input value={stepData.step_number}/>
    <Input value={stepData.status}/>
    <Input value={stepData.procedure}/>
    <Input value={stepData.is_validated}/>
    <Input value={stepData.procedure}/>
  </div>;
}

export default ProcedureStepDetails;
