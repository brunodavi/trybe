import React, { Component } from 'react'
import countries from './countries'

export default class Info extends Component {
  render() {
    const { handleClick, states } = this.props
    return (
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label><p>Nome:</p> 
          <input name="name" type="text" values={states.name} onChange={handleClick} />
        </label>

        <label><p>Email:</p> 
          <input name="email" type="email" values={states.email} onChange={handleClick} />
        </label>

        <label><p>CPF:</p> 
          <input name="cpf" type="text" values={states.cpf} onChange={handleClick} />
        </label>

        <label><p>Endereço:</p>
          <input name="address" type="text" values={states.address} onChange={handleClick} />
        </label>

        <label><p>Cidade:</p>
          <input name="city" type="text" values={states.city} onChange={handleClick} />
        </label>
        
        <select name="countries" values={states.countries} onChange={handleClick} >
          {countries.map((country, i) => <option key={ i } >{country.nome}</option>)}
        </select>

        <div className="radios">
          <label>
            <input type="radio" name="type" value="apartamento" onChange={handleClick} /> Apartamento
          </label>

          <label>
            <input type="radio" name="type" value="casa" onChange={handleClick} /> Casa
          </label>
        </div>

      </fieldset>
    )
  }
}
