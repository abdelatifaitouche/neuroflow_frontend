import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProcedure } from "@/services/proceduresService";
import { Button } from "@/components/ui/button";
import { getDepartement } from "@/services/departementService";
import { Input } from "@/components/ui/input";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

function CreateProcedurePage() {
  const [ProcedureData, setProcedureData] = useState({
    title: "",
    description: "",
    content: "",
    department: 0,
    status: "",
    version: 0,
  });

  const [departements, setDepartements] = useState([]);

  const editor = useCreateBlockNote({});

  const [content, setContent] = useState("");

  const fetchDepartements = async () => {
    const departements_list = await getDepartement();
    setDepartements(departements_list);
  };

  const onChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);

    setProcedureData((prev) => ({ ...prev, content: html }));
  };

  useEffect(() => {
    //fetchDepartements();
    onChange();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ProcedureData);
    const response = await createProcedure(ProcedureData);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-2">
          <Button className={"bg-gray-300"}>Save</Button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2  h-[60vh]">
        <div className="flex gap-3 w-full h-full ">
          <div className="flex w-[20vw] flex-col gap-5 h-[100%]">
            <Input
              placeholder="Title"
              onChange={(e) => {
                setProcedureData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
            />

            <Input
              placeholder="description"
              onChange={(e) => {
                setProcedureData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            />

            <Select
              onValueChange={(value) => {
                console.log(value);
                setProcedureData((prev) => ({ ...prev, department: value }));
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Departements" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">DG</SelectItem>
                <SelectItem value="2">RH</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="status"
              onChange={(e) => {
                setProcedureData((prev) => ({
                  ...prev,
                  status: e.target.value,
                }));
              }}
            />

            <Input
              placeholder="version"
              onChange={(e) => {
                setProcedureData((prev) => ({
                  ...prev,
                  version: e.target.value,
                }));
              }}
            />
          </div>

          <div className="flex-1">
            <BlockNoteView editor={editor} onChange={onChange} />
          </div>
        </div>
        <Button type="submit">Create</Button>

      </form>
    </div>
  );
}

export default CreateProcedurePage;
