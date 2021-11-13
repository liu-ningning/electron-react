import React, { useEffect } from 'react'

const Error404 = () => {
  useEffect(() => {
    console.warn('page-404')
  }, [])

  return (
    <div className="page-404">
      您访问的页面不存在
    </div>
  )
}

export default Error404