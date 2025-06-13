import { Component } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class MovieCard extends Component {
  state = {
    movieDetails: {},
  }

  getMovieData = () => {
    fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.valore)
      .then((responsive) => {
        if (responsive.ok) {
          return responsive.json()
        } else {
          throw new Error("errr")
        }
      })
      .then((data) => {
        console.log("DATA", data.Search[0])
        this.setState({
          movieDetails: data.Search[0],
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount = () => {
    this.getMovieData()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.valore !== prevProps.valore) {
      this.getMovieData()
    }
  }

  render() {
    return (
      <>
        <Card className="mt-2">
          <Card.Img variant="top" src={this.state.movieDetails.Poster} />
          <Card.Body>
            <Card.Title>{this.state.movieDetails.Title}</Card.Title>
            <Card.Text>
              {this.state.movieDetails.Year} - {this.state.movieDetails.Type}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default MovieCard
