import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./Mynavbar"
import MovieCard from "./MovieCard"
import MovieSelector from "./MovieSelector"
import { Row, Container, Col } from "react-bootstrap"
import { Component } from "react"
import StateExample from "./StateExample"
import EffectExample from "./EffectExample"

function App() {
  return (
    <>
      <h1 className="text-center mt-2">react hooks</h1>
      <div className="text-center">
        <StateExample />
        <EffectExample />
      </div>
    </>
  )
}

export default App
