import Form from "react-bootstrap/Form"

const MovieSelector = function (props) {
  return (
    <>
      <Form.Select
        aria-label="Movie title selector"
        value={props.valore}
        onChange={(e) => {
          props.cambiaValore(e.target.value)
        }}
      >
        <option>Iron Man</option>
        <option>The Hulk</option>
        <option>Thor</option>
        <option>Captain America</option>
        <option>Avengers</option>
      </Form.Select>
    </>
  )
}

export default MovieSelector
