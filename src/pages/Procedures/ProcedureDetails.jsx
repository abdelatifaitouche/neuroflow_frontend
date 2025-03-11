import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  deleteProcedure,
  getProcedureDetails,
  getProcedureSteps,
} from "@/services/proceduresService";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import ProcedureStep from "./procedureStep";

import { useLocation, useNavigate } from "react-router-dom";
import ProcedureStepCard from "./ProceduresComponents/ProcedureStepCard";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ProcedureStepForm from "./ProceduresComponents/ProcedureStepForm";

function ProcedureDetails() {
  const { id } = useParams();
  const editor = useCreateBlockNote({});

  const navigate = useNavigate();

  const [procedure, setProcedure] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [procedureSteps, setProcedureSteps] = useState(null);

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
      try {
        const response = await getProcedureSteps(id);
        setProcedureSteps(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProcedureDetails();
    fetchProceduresSteps();
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
      <div className="flex gap-2">
        <Button>View Document</Button>
        <AlertDialog>
          <AlertDialogTrigger className={'bg-red-500 py-1 px-2 text-white rounded-md'}>Delete</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  const response = await deleteProcedure(id);
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Add a step</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create a step</SheetTitle>
              <SheetDescription>
                Each procedure contains different steps, Add one
              </SheetDescription>
            </SheetHeader>
            <ProcedureStepForm procedure={procedure} setProcedureSteps={setProcedureSteps} />
          </SheetContent>
        </Sheet>
      </div>

      <br />
      <br />

      <form className="flex gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <Input value={procedure?.title || ""} readOnly />
          <Input value={procedure?.description || ""} readOnly />
          <Input value={procedure?.status || ""} readOnly />
          <Input value={procedure?.owner || ""} readOnly />
          <Input value={procedure?.department || ""} readOnly />
        </div>
      </form>

      <div className="mt-5 grid grid-cols-5 grid-rows-5 gap-2">
        {procedureSteps &&
          procedureSteps.map((step) => {
            return (
              <div
                onClick={() => {
                  navigate(`/procedures/${procedure.id}/steps/${step.id}`);
                }}
              >
                <ProcedureStepCard step={step} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProcedureDetails;
