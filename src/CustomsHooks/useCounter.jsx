import React, { useState } from 'react'

export const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const Increment = () => {
      setCounter(counter + 1)
    }

    const Decrement = () => {
      setCounter(counter - 1)
    }

    const Restart = () => {
      setCounter(0)
    }
  
    return {
      counter,
      Increment, 
      Decrement, 
      Restart
    }
}
