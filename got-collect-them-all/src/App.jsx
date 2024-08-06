import { useState } from 'react'
import './App.css'
import pokemon from "pokemontcgsdk"

function App() {
  pokemon.configure({apiKey: '123abcdda70f59-a08e-47f5-b0d9-5c047ec75e7b'});
  const [count, setCount] = useState(0)

  pokemon.card.where({pageSize: 250, page: 1})
  .then((result) => {
    console.log(result.data[0].name)
  }

)} 

  

export default App
