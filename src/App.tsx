import React, {useEffect} from "react"
import KedroFlow from "kedro-vizjs/dist/esm/components/KedroFlow"
// buggy
// import {data} from "./graph/data"
// import {graph} from "./graph/graph"
import Fn from "./assets/function.svg"
import Data from "./assets/database.svg"
import Play from "./assets/play.svg"
import './App.css'

const RunIcon = {
  icon: Play,
  width: "16px",
  height: "16px"
}


const functionIcon = {
  icon: Fn,
  width: "16px",
  height: "16px"
}

const DataIcon = {
  icon: Data,
  width: "16px",
  height: "16px"

}


function App() {
  const HandleFunctionNodeclick = (CodeHtml: string) => {
    console.log(CodeHtml)
  }

  useEffect(()=> {
     // console.log(graph, data)
  }, [])
  return (

    <div style={{ height: '100vh', width: "100vw" }}>
      <KedroFlow
        yOffest={150}
        xOffest={200}
        // graph={graph}
        // data4graph={data}

        webSocketURL='ws://localhost:3000'
        runIcon={RunIcon}
        dataIcon={DataIcon}
        functionIcon={functionIcon}
        onFnNodeClick={HandleFunctionNodeclick}
      //  delayMS={800}
      />
    </div>

  )
}

export default App
