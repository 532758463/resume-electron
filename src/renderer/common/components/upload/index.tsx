/**
 * @desc 上传控件，默认自带的input样式
 * @author {pengdaokuan}
 */
import React, { useRef } from 'react';
import './index.less';
import classnames from 'classnames';
import FileEvent from './fileEvent';

function Upload({
  style,
  accept,
  multiple = false,
  visible = true,
  onAfterClick,
  onAfterChange,
  className
}: TSUpload.Input) {
  const inputSelectorRef = useRef(null);

  function onChange(e: any) {
    const fileList: any = e?.target?.files || [];
    if (e.target.value === '') {
      return;
    }
    const instance: TSUpload.File[] = [];
    // fileList 属于 [object FileList] 类型
    for (const file of fileList) {
      instance.push(new FileEvent(file));
    }
    onAfterChange && onAfterChange(instance);
  }

  return (
    <input
      type="file"
      style={style}
      accept={accept}
      multiple={multiple}
      ref={inputSelectorRef}
      onClick={onAfterClick}
      onChange={onChange}
      className={classnames(
        'h-8 w-32 cursor-pointer py-3 px-1 text-sm rounded-sm border-slate-600 shadow-sm hover:bg-sky-500 hover:border-sky-500',
        {
          visible: visible,
          invisible: !visible
        },
        className
      )}
    />
  );
}

export default Upload;
