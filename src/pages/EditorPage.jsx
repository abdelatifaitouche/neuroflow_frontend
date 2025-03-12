import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { Button } from "@/components/ui/button";
import { getProcedureDetails, patchProcedureDetatils } from "@/services/proceduresService";

function EditorPage() {
  const { id } = useParams();
  const editor = useCreateBlockNote({});
  
  const [procedure, setProcedure] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false); // Prevent duplicate loads

  useEffect(() => {
    const fetchProcedureDetails = async () => {
      try {
        const response = await getProcedureDetails(id);
        setProcedure(response);
      } catch (error) {
        console.error("Error fetching procedure:", error);
      }
      setIsLoading(false);
    };

    fetchProcedureDetails();
  }, [id]);

  useEffect(() => {
    if (!procedure || isInitialized) return; // Prevent reloading content multiple times

    const loadInitialContent = async () => {
      const initialContent = procedure.content || ""; // Use only `content`, not `merged_content`
      const blocks = await editor.tryParseHTMLToBlocks(initialContent);
      editor.replaceBlocks(editor.document, blocks);
      setIsInitialized(true);
    };

    loadInitialContent();
  }, [procedure]); // Runs only once when procedure is first loaded

  const onChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    setProcedure((prev) => ({ ...prev, content: html }));
  };

  return (
    <div className="m-4 p-4">
      <Button className={"bg-green-300 rounded-md py-1 px-2"}
        onClick={async () => {
          await patchProcedureDetatils(procedure, procedure.id);
        }}
      >
        Save changes
      </Button>
      <BlockNoteView editor={editor} onChange={onChange} />
    </div>
  );
}

export default EditorPage;
