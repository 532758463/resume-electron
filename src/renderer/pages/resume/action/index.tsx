/**
 * @description 制作简历-操作区
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTER from '@common/constants/router';

function ResumeAction() {
  const history = useHistory();
  // 返回首页
  const onBack = () => history.push(ROUTER.root);
  // 导出PDF
  const onExport = () => {
    console.log('导出简历');
  };

  return (
    <div className="flex items-center justify-between h-16 px-5 bg-white rounded-md">
      <button onClick={onBack}>返回</button>
      <button
        className="h-10 px-4 py-2 text-sm font-semibold text-white rounded-full shadow-sm bg-cyan-500"
        onClick={onExport}
      >
        导出PDF
      </button>
    </div>
  );
}

export default ResumeAction;
