import React from 'react';

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

const Greeting = {
  GreetingClass,
  CreateName
}

export default Greeting
