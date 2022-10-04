import React from 'react';
import ResumeAction from './action';

export const Resume = () => {
  return (
    <div className="flex w-screen h-screen px-8 bg-gray-700 py-7">
      <div className="flex-1">
        <div>
          <ResumeAction />
        </div>
        <div>简历内容区</div>
      </div>
      <div>简历工具栏区</div>
    </div>
  );
};

export default Resume;
