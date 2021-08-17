import React from 'react'

class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <p>{this.props.children}</p>
        </h1>
      </div>
    );
  }
}

export default Component;