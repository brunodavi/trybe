import { Component } from 'react'
import { connect } from 'react-redux'
import { addJokeAsync } from './redux/actions'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.forceAddJoke = this.forceAddJoke.bind(this)
  }
  componentDidMount() {
    this.forceAddJoke()
  }

  forceAddJoke() {
    const { addJoke } = this.props
    addJoke()
  }

  render() {
    const { jokes, addJoke } = this.props;
    return (
      <div>
        <div className="App">
          {
            jokes.map(({ type, setup, punchline }, i) => (
              <div className="Joke" key={ i }>
                <h1>{type}</h1>
                <h2>{setup}</h2>
                <h3>{punchline}</h3>
              </div>
            ))
          }
        </div>
        <button onClick={ addJoke }>ADD</button>
      </div>
    );
  }
}

const mapStateToProps = ({ jokes }) => ({
  jokes
})

const mapDispatchToProps = (dispatch) => ({
  addJoke: () => dispatch(addJokeAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
