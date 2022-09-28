import React from 'react';
// import Style from './index.module.less';
import Logo from '@assets/logo.png';
import { useHistory } from 'react-router-dom';
import { isHttpOrHttpsUrl } from '@src/renderer/utils/router';
import { ROUTER_KEY } from '@common/constants/router';
import { shell } from 'electron';

export const Root = () => {
  const history = useHistory();

  // const onRouterToLink = (router: any) => {
  //   if (isHttpOrHttpsUrl(router.url)) {
  //     shell.openExternal(router.url);
  //   } else {
  //     if (router.key !== ROUTER_KEY.resume) {
  //       history.push(router.url);
  //     } else {
  //       history.push(router.url);
  //     }
  //   }
  // };

  return (
    <div className="flex justify-center w-screen h-screen bg-gray-700 pt-80">
      <div className="flex-col justify-center space-y-10 text-center text-white">
        <img className="inline-block" src={Logo} alt="" />
        <div>VisResumeMook</div>
        <div>一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="flex justify-evenly">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div className="cursor-pointer" key={index}>
                {text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed text-gray-400 bottom-10">
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
