import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'

const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  }, [])

  return (
    <div className="container text-center" style={{marginTop : '50px'}}>
        <h1>User Auth</h1>
        <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
    </div>
  )
}

export default App
