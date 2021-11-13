import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './index.less'

import Menu from '@src/components/Menu'

const avatar = 'https://thirdqq.qlogo.cn/g?b=oidb&k=ClvbbYen74Hia0s19qaQb3g&s=100&t=1555466874'

const Aside = () => {
  useEffect(() => {
    console.warn('Aside')
  }, [])

  return (
    <div className="aside-root">
      <Link to="/" className="logo">
        <img className="avatar" src={avatar} alt="" />
        <span className="name">伊可宁</span>
      </Link>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Aside