'use client';

import { useCreateEditor } from '@/hooks/use-create-editor';
import { useEditorState } from '@/context/editor-context';
import { PlateEditor } from '@/components/editor/plate-editor';
import { TemplateLibrary } from '@/components/editor/template-library';
import { CommentsSection } from '@/components/editor/comments-section';

export default function EditorPage() {
   const editor = useCreateEditor();
   const [content, setContent] = useEditorState();

   return (
      <div className="flex h-[calc(100vh-60px)]">
         <aside className="w-64 border-r p-4">
            <TemplateLibrary />
            {/* <VariablesPanel /> */}
         </aside>

         <main className="flex-1 p-6">
           <PlateEditor />
         </main>

         <aside className="w-96 border-l p-4 space-y-6">
            <CommentsSection />
            {/* <ValidationWorkflow /> */}
         </aside>
      </div>
   );
}
