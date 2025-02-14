import React, { createContext, useState } from "react";

export const context = createContext()

function OscuroContexto({children}){
    const [oscuro, setOscuro] = useState(false)

    return (
        <context.Provider value={{oscuro, setOscuro}}>
            {children}
        </context.Provider>
    )
}

export default OscuroContexto