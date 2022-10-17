import React from 'react';
import ResumeAction from './action';
import ResumeContent from './content';

export const Resume = () => {
  return (
    <div className="flex w-screen h-screen px-8 bg-gray-700 py-7">
      <div className="flex-1 space-y-10">
        <div>
          <ResumeAction />
        </div>
        <div>
          <ResumeContent />
        </div>
      </div>
      <div>简历工具栏区</div>
    </div>
  );
};

export default Resume;
