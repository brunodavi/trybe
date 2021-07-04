import React, { Component } from 'react'
import './css/Button.css'

export default class Button extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <button id="disabled" onClick={ onClick }>
        { value }
      </button>
    )
  }
}
