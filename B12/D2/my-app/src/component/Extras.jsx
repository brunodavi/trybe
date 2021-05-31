import React, { Component } from 'react'

export default class Extras extends Component {
  render() {
    const { handleChange } = this.props

    return (
      <fieldset>
      <legend>Opções Extras</legend>
        <select name="option" onChange={handleChange}>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
        <label>
          <input type="file" name="arquivo" onChange={handleChange} />
        </label>
      </fieldset>
    
    )
  }
}
