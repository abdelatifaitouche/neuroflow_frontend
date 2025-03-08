import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'

import "../index.css"

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline],  // Adding Underline support
    content: "<h1>Welcome to Tiptap!</h1>",
  });

  if (!editor) return null;

  return (
    <div className="border rounded-md p-2 mx-auto">
      {/* Toolbar */}
      <div className="flex space-x-2 mb-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`px-3 py-1 border rounded ${editor.isActive("bold") ? "bg-gray-300" : ""}`}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`px-3 py-1 border rounded ${editor.isActive("italic") ? "bg-gray-300" : ""}`}>I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`px-3 py-1 border rounded ${editor.isActive("underline") ? "bg-gray-300" : ""}`}>U</button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={`px-3 py-1 border rounded ${editor.isActive("strike") ? "bg-gray-300" : ""}`}>S</button>
        
        <button onClick={() => editor.commands.toggleHeading({ level: 1 })} className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 1 }) ? "bg-gray-300" : ""}`}>H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}>H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 3 }) ? "bg-gray-300" : ""}`}>H3</button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`px-3 py-1 border rounded ${editor.isActive("bulletList") ? "bg-gray-300" : ""}`}>• List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`px-3 py-1 border rounded ${editor.isActive("orderedList") ? "bg-gray-300" : ""}`}>1. List</button>
        
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`px-3 py-1 border rounded ${editor.isActive("blockquote") ? "bg-gray-300" : ""}`}>&#8220;Quote</button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`px-3 py-1 border rounded ${editor.isActive("codeBlock") ? "bg-gray-300" : ""}`}>{"</>"}</button>

        <button onClick={() => editor.chain().focus().undo().run()} className="px-3 py-1 border rounded">↶ Undo</button>
        <button onClick={() => editor.chain().focus().redo().run()} className="px-3 py-1 border rounded">↷ Redo</button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="ProseMirror" />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>

    </div>
  );
}
