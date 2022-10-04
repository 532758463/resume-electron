import React from 'react';
// import Style from './index.module.less';
import Logo from '@assets/logo.png';
import { useHistory } from 'react-router-dom';
import { isHttpOrHttpsUrl } from '@src/renderer/common/utils/router';
import { ROUTER_KEY, ROUTER_ENTRY } from '@common/constants/router';
import { shell } from 'electron';
import fileAction from '@src/renderer/common/utils/file';
import { getAppPath } from '@src/renderer/common/utils/appPath';

export const Root = () => {
  const history = useHistory();
  // 👇 读取一下当前这个文件内容
  getAppPath().then((rootPath) => {
    console.log('应用程序的目录路径为: ', rootPath);
    fileAction
      .read(`${rootPath}/src/renderer/app.tsx`, 'utf-8')
      .then((data) => {
        console.log(data);
      });
  });
  // fileAction
  //   .read('D:XiaoYnag/2022/electron/resume/index.tsx', 'utf-8')
  //   .then((data) => {
  //     console.log(data);
  //   });
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(router.url);
      } else {
        history.push(router.url);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center w-screen h-screen bg-gray-700">
      <div className="justify-center flex-grow pt-20 space-y-10 text-center text-white lg:pt-40">
        <img className="inline-block" src={Logo} alt="" />
        <div>VisResumeMook</div>
        <div>一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="flex justify-center">
          {ROUTER_ENTRY.map((item) => (
            <div
              className="px-6 cursor-pointer"
              onClick={() => onRouterToLink(item)}
              key={item.key}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="my-4 text-center text-gray-400">
        <div>
          <p>
            Copyright © 2022-{new Date().getFullYear()} All Rights Reserved.
            Copyright By xiaoyang
          </p>
        </div>
      </div>
    </div>
  );
};

export default Root;
