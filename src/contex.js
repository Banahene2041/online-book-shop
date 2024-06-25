import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
function Context({children}) {
    const [showNavLink,setShowNavLink] = useState(false)
  return (
    <AppContext.Provider value={{
        showNavLink,
        setShowNavLink,
    }}>
        {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {Context,useGlobalContext}

