import React, { Component } from 'react'
import Info from './Info'
import Work from './Work'

export default class Form extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.clearState = this.clearState.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countries: '',
      type: '',
      resume: '',
      position: '',
      showAlert: false,
      description: ''
    }

  }

  handleClick({ target, type }) {
    const { name } = target;

    let value =
    (target.type === 'checkbox')
    ? target.checkbox
    : target.value;

    switch (name) {
      case 'name':
        value = value.toUpperCase()
        break;

      case 'address':
        value = value.replace(/[^çãõéàê\w\s,.!?"'=:/$%@+\-()]/g, '');
        break;

      case 'city':
        if (type === 'blur') {
          value = value.replace(/\d.+/, '')
        }
        break;

      case 'position':
        if (type === 'mouseenter' && !this.state.showAlert) {
          alert('Preencha com cuidado esta informação.')
          this.setState({ showAlert: true })
        }
        break;
    
      default:
        break;
    }

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
