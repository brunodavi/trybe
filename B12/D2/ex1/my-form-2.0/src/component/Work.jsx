import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    const { handleClick, states } = this.props
    return (
      <fieldset>
        <legend>Último Emprego</legend>

        <label> <p>Resumo:</p>
          <textarea name="resume" value={states.resume}
          maxLength="1000" onChange={handleClick} required />
        </label>

        <label> <p>Cargo:</p> 
          <textarea name="position" value={states.position}
          maxLength="40" onMouseEnter={handleClick} onChange={handleClick} required />
        </label>

        <label> <p>Descrição:</p> 
          <textarea name="description" value={states.description}
          maxLength="500" onChange={handleClick} required />
        </label>
      </fieldset>
    )
  }
}
