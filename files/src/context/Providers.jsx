import { userContext } from "./userContext"

import { useState } from "react"

export default function Providers({children}) {
    const [user,setUser]=useState({})
  return (
    <div>
 <userContext.Provider value={{user,setUser}}>
        {children}
        </userContext.Provider>
    </div>
  )
}
