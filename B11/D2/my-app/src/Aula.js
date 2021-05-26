import React from 'react';
import PropTypes from 'prop-types'

class GreetingClass extends React.Component {
  render() {
    const { first, last } = this.props.name;
    return (<h1>Hello, {first} {last}</h1>);
  }
}

function CreateName(first, last) {
  return {
    first,
    last
  }
}

GreetingClass.propTypes = {
  name: PropTypes.exact({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired
  })
};

const Greeting = {
  GreetingClass,
  CreateName
}

export default Greeting
