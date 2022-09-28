import React from 'react';
// import Style from './index.module.less';
import Logo from '@assets/logo.png';
import { useHistory } from 'react-router-dom';
import { isHttpOrHttpsUrl } from '@src/renderer/utils/router';
import { ROUTER_KEY, ROUTER_ENTRY } from '@common/constants/router';
import { shell } from 'electron';

export const Root = () => {
  const history = useHistory();

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
      <div className="justify-center space-y-10 text-center text-white flex-grow pt-20 lg:pt-40">
        <img className="inline-block" src={Logo} alt="" />
        <div>VisResumeMook</div>
        <div>一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="flex justify-center">
          {ROUTER_ENTRY.map((item) => (
            <div
              className="cursor-pointer px-6"
              onClick={() => onRouterToLink(item)}
              key={item.key}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-400 text-center my-4">
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
