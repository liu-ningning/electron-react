import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    console.warn('home-page')
  }, [])

  return (
    <div className="home-page">
      主页-home-page
    </div>
  )
}

export default Home