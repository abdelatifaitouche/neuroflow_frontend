import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link, Navigate } from 'react-router-dom';
import { getProcedures } from '@/services/proceduresService';



function Procedures() {
  const [procedures, setProcedures] = useState([]);


    const fetchProcedures = async () => {
        const procedure_data = await getProcedures();
        setProcedures(procedure_data)
    }


  useEffect(()=>{

   fetchProcedures()
} , [])
  

  return (
    <div>
        <Link to="/procedures/new">Create</Link>
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

export default Procedures;





