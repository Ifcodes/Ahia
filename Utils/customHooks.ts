import { useState } from "react"

export const mainHook = () => {
  const [number, setNumber] = useState(0)

  return {
    number, 
    setNumber
  }
}