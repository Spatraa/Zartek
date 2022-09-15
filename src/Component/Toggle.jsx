import { useState } from "react"
import React from 'react'

const Toggle=()=>{
  const[toggle,setToggle]=useState(true);
  const change=()=>{
    setToggle(!toggle);
  }
return(
<>

<button onClick={change}>{toggle?`Toggled`:`Toggle`}</button>
</>
)
}
export default Toggle;