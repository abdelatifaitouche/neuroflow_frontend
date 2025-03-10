import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link, useNavigate } from 'react-router-dom';
import { getProcedures } from '@/services/proceduresService';
import { Button } from '@/components/ui/button';



function Procedures() {
  const [procedures, setProcedures] = useState([]);
  const navigate = useNavigate()

    const fetchProcedures = async () => {
        const procedure_data = await getProcedures();
        setProcedures(procedure_data)
    }


  useEffect(()=>{

   fetchProcedures()
} , [])
  

  return (
    <div>
        <Link to="/procedures/new" className='bg-black text-white px-2 py-1 rounded-md text-center'>Create</Link>
      <Table>
        <TableHeader> 
          <TableRow>
            <TableHead>Procedure</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>owner</TableHead>
            <TableHead>view</TableHead>
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
            <TableCell><Button onClick={()=>{
              //navigate to
              navigate(`/procedures/${procedure.id}` , { state: { procedure } })
            }}>View</Button></TableCell>
          </TableRow>
        );
      })}
        </TableBody>
        
      </Table>
    </div>
  );
}

export default Procedures;





