import React, { useState } from "react"

const App = () => {
  const [number, setNumber] = useState(4)
  const [theme, setTheme] = useState('blue')

  const handlePlus = () => {
    setNumber(prevNumber => prevNumber + 1
    )
    setTheme('red')
  }

  const handleMinus = () => {
    setNumber(prevNumber => prevNumber - 1
    )
    setNumber(prevNumber => prevNumber - 1
    )
  }
  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <div>{number}</div>
      <div>{theme}</div>
      <button onClick={handleMinus}>-</button>
    </div>
  )
};

export default App;
