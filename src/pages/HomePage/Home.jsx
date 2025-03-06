import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
function Home() {
  const [procedures, setProcedures] = useState([]);
  const API_URL = 'http://127.0.0.1:8000/api/procedures/procedures_list/';
  axios.defaults.withCredentials = true;

  // Fetching data from API
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/procedures/procedures_list/", {
      withCredentials: true,  // Ensures cookies are sent
    })
    .then(response => setProcedures(response.data.response))
    .catch(error => console.log(error.response ? error.response.data : error.message));
  }, []);

  // Column definitions for TanStack Table
  

  // Set up table data and hooks

  return (
    <div>
      {/* Display procedures as a list */}
      

      <Drawer>
  <DrawerTrigger>Create</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Create a new Procedure</DrawerTitle>
      <ProcedureForm/>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>


      <Table>
        <TableHeader> 
          <TableRow>
            <TableHead>Procedure</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>owner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {procedures.map((procedure) => {
        return (
          <TableRow key={procedure.id}>
            <TableCell>{procedure.title}</TableCell>
            <TableCell>{procedure.version}</TableCell>
            <TableCell>{procedure.status}</TableCell>
            <TableCell>{procedure.owner}</TableCell>
          </TableRow>
        );
      })}
        </TableBody>
        
      </Table>
    </div>
  );
}

export default Home;




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

  </form>);
}
