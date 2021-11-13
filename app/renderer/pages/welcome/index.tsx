import React, { useEffect } from 'react'

const Welcome = () => {
  useEffect(() => {
    console.warn('Welcome-page')
  }, [])

  return (
    <div className="welcome-page">
      祝你开心每一天
    </div>
  )
}

export default Welcome