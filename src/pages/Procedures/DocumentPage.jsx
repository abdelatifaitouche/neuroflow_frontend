


import React , {useEffect} from 'react'

function DocumentPage() {
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
      }, [editor]); 
  return (
    <div>
      <BlockNoteView className='bg-green-50' editor={editor} editable={false} />
    </div>
  )
}

export default DocumentPage
