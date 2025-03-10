import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getProcedureDetails, getProcedureSteps } from '@/services/proceduresService';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import ProcedureStep from './procedureStep';



import { useLocation , useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function ProcedureDetails() {
  const { id } = useParams();
  const editor = useCreateBlockNote({});


  const navigate = useNavigate()

  const [procedure, setProcedure] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [procedureSteps , setProcedureSteps] = useState(null)

  useEffect(() => {
    const fetchProcedureDetails = async () => {
      setIsLoading(true);
      try {
        const response = await getProcedureDetails(id); // Use id from params
        setProcedure(response);
      } catch (error) {
        console.error("Error fetching procedure:", error);
      }
      setIsLoading(false);
    };

    const fetchProceduresSteps = async () => {
      try{
        const response = await getProcedureSteps(id);
        setProcedureSteps(response);
        console.log(response)

      }catch(error){
        console.log(error)
      }
    }

    fetchProcedureDetails();
    fetchProceduresSteps()
  }, [id]); // Run when id changes
  /*
  useEffect(() => {
    if (!procedure) return; // Wait for procedure data

    const loadInitialHTML = async () => {
      setIsLoading(true);
      const blocks = await editor.tryParseHTMLToBlocks(
        (procedure.content || "") + (procedure.merged_content || "")
      );
      editor.replaceBlocks(editor.document, blocks);
      setIsLoading(false);
    };

    loadInitialHTML();
  }, [procedure, editor]); // Run when procedure updates*/

  return (
    <div>
      <Button onClick={()=>{
        navigate('/procedures/')
      }}>View Document</Button>

<br/><br/>

      <form className="flex gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <Input value={procedure?.title || ""} readOnly />
          <Input value={procedure?.description || ""} readOnly />
          <Input value={procedure?.status || ""} readOnly />
          <Input value={procedure?.owner || ""} readOnly />
          <Input value={procedure?.department || ""} readOnly />
          
        </div>
        
      </form>
    
      <div className='mt-5 grid grid-cols-5 grid-rows-5 gap-2'>
       {
        procedureSteps && procedureSteps.map((step)=>{
          return <Card>
                  <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                      <CardDescription>step : {step.step_number}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{step.status}</p>
                  </CardContent>
                  <CardFooter className={"flex gap-2"}>
                    <div className={`${step.is_validated ? 'bg-green-700' : 'bg-amber-500'} p-2 rounded-md text-white`}>
                        {
                          step.is_validated ? <p>Validated</p> : <p>Not validated</p>
                        }
                    </div>
                    <Button>View step</Button>
                  </CardFooter>
                  </Card> 
        })
       }
      </div>

           

 </div>
  );
}

export default ProcedureDetails;
