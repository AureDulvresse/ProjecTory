import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Template } from './template';

const TEMPLATES = [
  {
    id: '1',
    name: 'Technical Specification',
    description: 'A template for writing technical specifications.',
  },
  {
    id: '2',
    name: 'User Story',
    description: 'A template for writing user stories.',
  },
  {
    id: '3',
    name: 'Meeting Minutes',
    description: 'A template for writing meeting minutes.',
  },
];

export const TemplateLibrary = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Library</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedTemplate ? (
          <Template id={selectedTemplate} />
        ) : (
          <ul>
            {TEMPLATES.map((template) => (
              <li key={template.id} onClick={() => setSelectedTemplate(template.id)}>
                {template.name} - {template.description}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
