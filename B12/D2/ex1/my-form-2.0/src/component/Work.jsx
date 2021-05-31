import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    const { handleClick, states } = this.props
    return (
      <fieldset>
        <legend>Último Emprego</legend>

        <label> <p>Resumo:</p>
          <textarea name="resume" value={states.resume} onChange={handleClick} />
        </label>

        <label> <p>Cargo:</p> 
          <textarea name="position" value={states.position} onChange={handleClick} />
        </label>

        <label> <p>Descrição:</p> 
          <textarea name="description" value={states.description} onChange={handleClick} />
        </label>
      </fieldset>
    )
  }
}
