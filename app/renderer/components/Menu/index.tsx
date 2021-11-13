import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './index.less'

const Menu = () => {
  useEffect(() => {
    console.warn('Aside')
  }, [])

  return (
    <div className="menu-root">
      <Link to="/home">home</Link>
      <br />
      <Link to="/main">main</Link>
    </div>
  )
}

export default Menu