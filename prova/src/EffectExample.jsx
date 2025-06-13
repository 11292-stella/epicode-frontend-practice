//stesse regole degli hooks aggiunge le cose che facevano
//componendDidMount e componendDidUpdate
//si usa come useState

import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

const EffectExample = function () {
  const [counter, setCounter] = useState(0)

  //accetta una funzione
  //e accetta un arrey non obbligatoria
  useEffect(() => {
    console.log(`sono useeffect`)
  })

  useEffect(() => {
    console.log("ciao vuoto")
  }, [counter]) // l arrey decide quante volte usarlo, se è vuoto lo rilancia una volta sola se l'arrey è riempito con valori di state o props il mio useeffect verrà reinvocato qunado uno di quei valori cambia praticamente un equivalente di componedDidUpdate con un if

  return (
    <div>
      <h1>ciao</h1>
      <Button
        variant="success"
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        incr
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        decr
      </Button>
      <p>valore di {counter}</p>
    </div>
  )
}
export default EffectExample
