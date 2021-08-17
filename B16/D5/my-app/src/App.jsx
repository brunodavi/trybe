import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction } from './redux/actions';

export class App extends Component {
  render() {
    const { add, counter } = this.props;
    return (
      <div>
        <button onClick={ add }>
          { counter }
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({addReducer}) => ({
  counter: addReducer
})

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

