import dynamic from 'dva/dynamic';


const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

export const getRootNavData = app => [
  {
    component: dynamicWrapper(app, [], () => import('../routes/IndexPage.js')),
    name: '首页', // for breadcrumb
    path: '/',
  },
  {
    component: dynamicWrapper(app, [], () => import('../routes/TestPage.js')),
    name: '测试', // for breadcrumb
    path: '/test',
  }
]

export const getNavData =  app =>[
  {
    component: dynamicWrapper(app, [], () => import('../routes/TestPage.js')),
    name: '测试1', // for breadcrumb
    path: '/test1',
  }
]
