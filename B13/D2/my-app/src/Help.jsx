import React, { Component } from 'react'

export default class Help extends Component {
  render() {
    const { info, match } = this.props
    return (
      <div>
        <h1>Help {info ? info : match.params.id}</h1>
      </div>
    )
  }
}
