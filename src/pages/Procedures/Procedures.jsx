import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import { getProcedures } from "@/services/proceduresService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Procedures() {
  const [procedures, setProcedures] = useState([]);
  const navigate = useNavigate();

  const fetchProcedures = async () => {
    const procedure_data = await getProcedures();
    setProcedures(procedure_data);
  };

  useEffect(() => {
    fetchProcedures();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Procedures</h1>
      <p className="text-gray-500 text-sm">
        Manage, filter and export your procedures from here
      </p>

      <div className="mt-5">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Input placeholder='Search for...' />
            <Button className={"bg-white text-black border-dashed border-2 hover:bg-gray-100"}>Status</Button>

            <Button className={"bg-white text-black border-dashed border-2 hover:bg-gray-100"}>Owner</Button>

          </div>
          <div className="flex gap-2">
            <Link
              to="/procedures/new"
              className="bg-black text-white px-4 py-1 rounded-md"
            >
              Create
            </Link>
            <Button className={"bg-blue-950"}>Export</Button>
          </div>
        </div>

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
                  <TableCell>
                    <div className={`${procedure.status === "Draft" ? "bg-amber-400" : "bg-green-800"} rounded-md text-white w-16 py-1  text-center text-sm`}>
                    {procedure.status}
                    </div>
                  </TableCell>
                  <TableCell>{procedure.owner}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        //navigate to
                        navigate(`/procedures/${procedure.id}`, {
                          state: { procedure },
                        });
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Procedures;
