import React, { Component } from 'react'
import Info from './Info'
import Work from './Work'

export default class Form extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.clearState = this.clearState.bind(this)

    const stateDefault = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countries: '',
      type: '',
      resume: '',
      position: '',
      description: ''
    }

    this.state = stateDefault;

  }

  handleClick({ target }) {
    const { name } = target;

    const value =
    (target.type === 'checkbox')
    ? target.checkbox
    : target.value;


    this.setState({ [name]: value });
  }

  clearState() {
    Object.keys(this.state).forEach((key) => {
      this.setState({ [key]: '' })
    });
  }

  render() {
    return (
      <form>
        <Info states={this.state} handleClick={this.handleClick} />
        <Work states={this.state} handleClick={this.handleClick} />
        <div className="buttons">
          <button type="submit">Enviar</button>
          <button type="reset" onClick={this.clearState}>Limpar</button>
        </div>
      </form>
    )
  }
}
