import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    const { handleChange } = this.props

    return (
      <fieldset>
      <legend>Informações Pessoais</legend>
        <label>
          Nome:
          <input type="text" name="nome" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Idade:
          <input type="number" name="idade" onChange={handleChange} />
        </label>
        <label>Lembrar: 
          <input type="checkbox" name="checkbox" onChange={handleChange} />
        </label> 
      </fieldset>
      
    )
  }
}
