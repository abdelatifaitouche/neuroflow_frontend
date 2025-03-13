import { getProcess } from "@/services/processService";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function ProcessPage() {
  const [processes, setProcesses] = useState([]);

  const fetchProcess = async () => {
    try {
      const data = await getProcess();
      setProcesses(data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProcess();
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableHead>Process</TableHead>
          <TableHead>responsable</TableHead>
          <TableHead>started_at</TableHead>
          <TableHead>status</TableHead>
          <TableHead>Details</TableHead>
        </TableHeader>
        <TableBody>
          {processes.map((process) => {
            return (
              <TableRow key={process.id}>
                <TableCell>{process.process_name}</TableCell>
                <TableCell>{process.responsable}</TableCell>
                <TableCell>{process.started_at}</TableCell>
                <div
                  className={`${
                    process.status === "Launched" ? "bg-amber-400" : "bg-green-800"
                  } rounded-md text-white w-16 py-1 text-center text-sm`}
                >
                  {process.status}
                </div>
                <TableCell>
                  <Button>View</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProcessPage;

