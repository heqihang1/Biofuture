import ErrorPage from '@/pages/ErrorPage';
import AppLayout from '@/layout/AppLayout';
import { lazy } from 'react';

// 快速导入工具函数
const lazyLoad = (moduleName) =>
  lazy(() => import(`@/pages/pc/${moduleName}/index.jsx`));

const Home = lazyLoad('Home');
const NewsInformation = lazyLoad('NewsInformation');
const ProductIntroduction = lazyLoad('ProductIntroduction');
const CompanyProfile = lazyLoad('CompanyProfile');
const ContactUs = lazyLoad('ContactUs');

const routers = [{
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
   // meta: { title: '' },
    children: [{
        path: 'home',
        element: <Home />,
        meta: { title: '首页'}
      },{
        path: 'newsInformation',
        element: <NewsInformation />,
        meta: { title: '新闻资讯' }
      },{
        path: 'productIntroduction',
        element: <ProductIntroduction />,
        meta: { title: '产品介绍' }
      },{
        path: 'companyProfile',
        element: <CompanyProfile />,
        meta: { title: '公司简介' }
      },{
        path: 'contactUs',
        element: <ContactUs />,
        meta: { title: '联系我们' }
      },
    ],
  }];

export default routers;
