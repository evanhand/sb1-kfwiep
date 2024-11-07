import React, { useState } from 'react';
import { ContentForm } from './ContentForm';
import { ContentPreview } from './ContentPreview';
import { ContentTemplate } from '../types';

export function ContentCalendar() {
  const [generatedContent, setGeneratedContent] = useState<ContentTemplate | null>(null);

  const handleGenerate = (content: ContentTemplate) => {
    setGeneratedContent(content);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ContentForm onGenerate={handleGenerate} />
      {generatedContent && <ContentPreview content={generatedContent} />}
    </div>
  );
}