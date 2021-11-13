import React, { useEffect } from 'react'

const Main = () => {
  useEffect(() => {
    console.warn('main-page')
  }, [])

  return (
    <div className="main-page">
      main-page
    </div>
  )
}

export default Main