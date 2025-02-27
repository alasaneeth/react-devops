import { useState } from "react"

const App = () => {

  const [count,setCount] = useState(0)
  return (
   <div style={{textAlign:"center"}}>
      <div><strong>{count}</strong></div>
      <div>
        <button style={{ marginRight:10 }} onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button  style={{ marginRight:10 }} onClick={()=> setCount((prev)=>prev - 1)}>Decrease</button>
        <button style={{ marginRight:10 }} onClick={()=>setCount(0)}>Reset</button>
        <button style={{ marginRight:10 }} onClick={()=>setCount((prev)=>prev * -1)} >Swing sign</button>
      </div>


   </div>
  )
}

export default App
