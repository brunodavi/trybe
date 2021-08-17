import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() { // função que executa ao renderizar o componente
    super() // usado para sobrescrever constructor

    // this = este objeto/classe = App
    // bind = função que define o this com o que for passado
    this.handleClick = this.handleClick.bind(this)

    this.state = { // define um estados no componente
      clicks: 0,
      styles: { color: 'green' }
    }
  }

  handleClick() {
    this.setState((state, _props) => ({
      clicks: state.clicks + 1 
    }))
    console.log(this.state.clicks + 1)
    if (this.state.clicks % 2 !== 0) {
      this.setState({styles: { color: 'green'} })
    } else {
      this.setState({styles: { color: 'red'} })
    }
  }

  render() {
    return <button style={this.state.styles} onClick={this.handleClick}>{this.state.clicks}</button>
  }
}

export default App;