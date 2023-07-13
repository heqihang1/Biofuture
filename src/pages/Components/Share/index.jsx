// 底部分享组件
import { useState } from "react";
import './index.scss'
import dh from '@/assets/webSite/dh.png'
import dy from '@/assets/webSite/dy.png'
import tt from '@/assets/webSite/tt.png'
import wb from '@/assets/webSite/wb.png'
import wx from '@/assets/webSite/wx.png'
import xhs from '@/assets/webSite/xhs.png'

const Share = () => {

  const imgArr = [
    { id: 1, image: wx },
    { id: 2, image: dy },
    { id: 3, image: xhs },
    { id: 4, image: tt },
    { id: 5, image: wb }
  ]

  return (
    <div className="Share">
      <div className="box">
        <div className="left">
          <img className="dh" src={dh} alt="" />
          <div className="dhText">0755-8695-9281</div>
        </div>
        <div className="right">
          <div>分享</div>
          {imgArr.map(item => (
            <div key={item.id}>
              <img className="image dh" src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Share