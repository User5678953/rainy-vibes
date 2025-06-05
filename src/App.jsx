import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      </div>
      <h1>Howdy Jordan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         Fromage Loves you!
        </p>
      </div>
      <p className="read-the-docs">
        So does ozzy
      </p>
    </>
  )
}

export default App
