import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    const { handleChange } = this.props

    return (
      <fieldset>
        <legend>Carta de Apresentação</legend>
        <label>
          <textarea name="texto" onChange={handleChange} />
        </label>
      </fieldset>
    )
  }
}
