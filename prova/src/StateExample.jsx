//regole hooks - si possono usare solo nei componenti a funzione - i react hooks si inizializzano nei componenti a funzione sempre in cima fuori da cicli funzioni condizioni...

import { Button } from "react-bootstrap"
import { useState } from "react"

const StateExample = function () {
  //qui si mette hook senza metterlo ne in funzioni ne cicli ecc..

  //  const [name, setName] = useState()
  //name è un nome random, set riprende quel nome quindi se name fosse topo , setName verrebbe setTopo.
  //name sarebbe una proprietà dello stato
  //setName è l'equivalente di setState che però cambia solo lo stato di name
  //per ricreare cio che scrivevi nello stato  devono essere riscritte
  //ES: state = {
  // name: "mario",
  //isloading: true}
  //dovresti riscriverli tutti const[name,setName]= useState()

  const [name, setName] = useState("mario") //valore iniziale di name

  return (
    <div>
      <h2>ciao</h2>
      <div>
        <Button
          variant={name === `mario` ? `danger` : `success`}
          onClick={() => {
            setName(name === `mario` ? `luigi` : `mario`)
          }}
        >
          {name}
        </Button>
      </div>
    </div>
  )
}

export default StateExample
