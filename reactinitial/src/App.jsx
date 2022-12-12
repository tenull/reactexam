import React, { useEffect, useState } from "react"
import Character from "./components/Character"
import LoadingMask from "./components/LoadingMask"
import Subscription from "./components/Subscription"

const App = () => {

  const[data,setData]  = useState(null)
  const[isPending,setIsPending]=useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://demoapi.com/api/series/howimetyourmother`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setData(data)
          setIsPending(false)
        })
    }, 5000);
  },[])



  return (
  <div className="App">
    {isPending && <div className="loading">Loading...</div> }   
{data && data.map(character=><Character key={character.name} character={character}/>)}

<Subscription/>
  </div>
  )
}

export default App
