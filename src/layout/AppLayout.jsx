import { Layout } from 'antd';
import {
  Link,
  matchRoutes,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import routers from '@/routes/routerConfig';

const { Header, Content } = Layout;

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#fff',
  height: 50,
  lineHeight: '50px',
  backgroundColor: '#e6f2da'
};

export default function AppLayout() {
  const location = useLocation();
  const router = useNavigate();

  useEffect(() => {
    location.pathname === '/' ? router('/home') : null;
  }, [location.pathname]);

  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    // console.log('路由路径====>', location.pathname);
    // 返回匹配到的路由数组对象，每一个对象都是一个路由对象˝
    const routes = matchRoutes(routers, location.pathname);
    const pathArr = [];
    if (routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
        if (path) {
          pathArr.push(path);
        }
      });
    }
    setSelectedKeys(pathArr);
  }, [location.pathname]);

  return (
    <div style={{height:'100%'}}>
      <div style={{width: '100%', background:'#e6f2da', display:'flex'}}>
        <div style={{width:'50%', display:'flex',
        justifyContent:'space-between',flexDirection:'row',
        height: '60px', lineHeight:'60px', margin:'auto'
        }}>
          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{ width:'50px', height:'50px', borderRadius:'25px', background:'pink'
           }}></div>
            <div>宝儿飞扬</div>
          </div>
          {routers[0].children?.map((router) => (
            <div key={router.path}>
              <Link to={'/' + router.path}>{router.meta?.title}</Link>
            </div>
          ))}
        </div>
      </div>
      {/* 内容块 */}
      <div>
        <Outlet />
      </div>
    </div>

  );
}
