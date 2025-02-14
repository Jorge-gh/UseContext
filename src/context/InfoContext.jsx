import React, { createContext, useState } from 'react'
export const contextInfo = createContext();

function InfoContext({children}) {
    
    const [info, setInfo] = useState(null)

    function loginUser(username, password){
      setInfo({
        username,
        password
      })
    }
  
    return (
    <contextInfo.Provider value={{info, loginUser}}>
        {children}
    </contextInfo.Provider>
  )
}

export default InfoContext