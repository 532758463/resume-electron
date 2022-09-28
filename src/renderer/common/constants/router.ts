// 模块路径
const ROUTER = {
  root: '/',
  resume: '/resume'
};

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume'
};

// 入口模块，TS 定义类型必须为 TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/532758463/resume-electron',
    key: 'intro',
    text: '介绍'
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历'
  },
  {
    url: 'https://github.com/532758463/resume-electron',
    key: 'code',
    text: '源码'
  }
];

export default ROUTER;