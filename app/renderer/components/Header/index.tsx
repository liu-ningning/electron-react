import React, { useEffect } from 'react'
import './index.less'

const Header = () => {
  useEffect(() => {
    console.warn('Header')
  }, [])

  return (
    <div className="header-root">
      顶部菜单栏
    </div>
  )
}

export default Header