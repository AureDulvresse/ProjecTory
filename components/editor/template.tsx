import { useSlate } from 'slate-react';
import { useEffect } from 'react';
import { Editor } from 'slate';

interface TemplateProps {
  id: string
}

export const Template = ({ id }: TemplateProps) => {
  const editor = useSlate();

  useEffect(() => {
    // Fetch template content based on ID
    const fetchTemplateContent = async (templateId: string) => {
      // Replace with your actual API call or data fetching logic
      const templateData = await fetch(`/api/templates/${templateId}`).then((res) => res.json());

      if (templateData) {
        (editor as Editor).insertText(templateData)
      }
    };

    fetchTemplateContent(id);
  }, [editor, id]);

  return <div>Loading template...</div>;
};
