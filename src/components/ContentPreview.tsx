import React from 'react';
import { ContentTemplate } from '../types';

interface ContentPreviewProps {
  content: ContentTemplate;
}

export function ContentPreview({ content }: ContentPreviewProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Your Content Calendar</h2>
      {content.weeks.map((week) => (
        <div key={week.weekNumber} className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Week {week.weekNumber}</h3>
          <div className="space-y-4">
            {week.days.map((day, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-emerald-400">{day.day}</h4>
                <p className="text-white mt-2">{day.topic}</p>
                <div className="mt-2">
                  <h5 className="text-sm font-medium text-gray-300">Key Points:</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {day.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <h5 className="text-sm font-medium text-gray-300">Hashtags:</h5>
                  <div className="flex flex-wrap gap-2">
                    {day.hashtags.map((tag, i) => (
                      <span key={i} className="text-emerald-400 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {day.notes && (
                  <p className="mt-2 text-sm text-gray-400">
                    <span className="font-medium">Notes:</span> {day.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}