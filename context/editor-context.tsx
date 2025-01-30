import { createContext, useContext, useState } from 'react';
import type { Editor } from 'slate';

interface EditorContextValue {
  content: Editor | null;
  setContent: (newContent: Editor | null) => void;
}

const EditorContext = createContext<EditorContextValue | null>(null);

export const EditorProvider = ({ children, initialContent }: { children: React.ReactNode; initialContent: Editor | null }) => {
  const [content, setContent] = useState<Editor | null>(initialContent);

  return (
    <EditorContext.Provider value={{ content, setContent }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorState = (): [Editor | null, (newContent: Editor | null) => void] => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditorState must be used within an EditorProvider');
  }
  return [context.content, context.setContent];
};
