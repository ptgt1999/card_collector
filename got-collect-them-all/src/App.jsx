import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokemon from "pokemontcgsdk"

function App() {
  pokemon.configure({apiKey: '123abcdda70f59-a08e-47f5-b0d9-5c047ec75e7b'});
  const [count, setCount] = useState(0)

  pokemon.card.where({ q: 'name:blastoise' })
 .then(result => {
     console.log(result.data[0].name) // "Blastoise"
 }) 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
