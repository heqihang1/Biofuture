// footer公司详情信息
import { useState } from "react";
import './index.scss'
import logoz from '@/assets/webSite/logoz.png'
import dizhiIcon from '@/assets/webSite/dizhi-icon.png'
import wangzhiIcon from '@/assets/webSite/wangzhi-icon.png'
import youxiangIcon from '@/assets/webSite/youxiang-icon.png'

const CompanyDetails = () => {

  return (
    <div className="CompanyDetails">
      <div className="box">
        <div className="main">

          <div className="mainL">
            <img src={logoz} alt="" />
            <div className="mainLText">
              <div>深圳市宝儿飞扬生物科技有限公司</div>
              <div><img src={dizhiIcon} alt="" />深圳市南山区深港合作区前海嘉里中心T7栋14层1403室</div>
              <div><img src={youxiangIcon} alt="" />info@baoerfeiyang.cn</div>
              <div><img src={wangzhiIcon} alt="" />www.baoerfeiyang.cn</div>
            </div>
          </div>
          <div className="mainR">
            <div>首页</div>
            <div>新闻资讯</div>
            <div>产品介绍</div>
            <div>关于我们</div>
          </div>

        </div>
        <div className="footer">
          隐私条例 &nbsp;&nbsp;&nbsp;&nbsp; 备案号：xxxxxxxxx
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails