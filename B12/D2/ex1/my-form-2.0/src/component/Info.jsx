import React, { Component } from 'react'
import countries from './countries'

export default class Info extends Component {
  render() {
    const { handleClick, states } = this.props
    return (
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label><p>Nome:</p>
          <input name="name" type="text" value={states.name}
            onChange={handleClick} maxLength="40" required />
        </label>

        <label><p>Email:</p> 
          <input name="email" type="email" value={states.email}
          maxLength="50" onChange={handleClick} required />
        </label>

        <label><p>CPF:</p> 
          <input name="cpf" type="text" value={states.cpf}
          maxLength="11" onChange={handleClick} required />
        </label>

        <label><p>Endereço:</p>
          <input name="address" type="text" value={states.address}
          maxLength="200" onChange={handleClick} required />
        </label>

        <label><p>Cidade:</p>
          <input name="city" type="text" value={states.city}
          maxLength="28" onBlur={handleClick} onChange={handleClick} required />
        </label>
        
        <select name="countries" value={states.countries} onChange={handleClick} required >
          {countries.map((country, i) => <option key={ i } >{country.nome}</option>)}
        </select>

        <div className="radios">
          <label>
            <input type="radio" name="type" value="apartamento" onChange={handleClick} /> Apartamento
          </label>

          <label>
            <input type="radio" name="type" value="casa" onChange={handleClick} required /> Casa
          </label>
        </div>

      </fieldset>
    )
  }
}
