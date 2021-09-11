import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../redux/actions';
import Button from '../components/Button';
import Input from '../components/Input';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      key: '',
    };

    this.registerName = this.registerName.bind(this);
    this.registerEmail = this.registerEmail.bind(this);
    this.registerKey = this.registerKey.bind(this);
  }Name
  Name

  registerName(name) {
    this.setState({ name });
  }

  registerEmail(email) {
    this.setState({ email });
  }

  registerKey(key) {
    this.setState({ key });
  }

  render() {
    const { addUser } = this.props;
    return (
      <div>
        <Input
          label="Nome de usuário:"
          type="text"
          message="De a-z minúsculas entre 3 à 10 caracteres"
          regex={/^[a-z]{3,10}$/}
          handleChange={this.registerName}
        />
        <Input
          label="Crie um email:"
          type="email"
          message="Faça algo similar à test123@gmail.com"
          regex={/^[\w._]{6,}@[a-z]{5,}\.com(\.br)?$/}
          handleChange={this.registerEmail}
        />
        <Input
          label="Crie uma senha:"
          type="password"
          message="Crie uma senha entre 8 e 64 caracteres"
          regex={/^\w{8,64}$/}
          handleChange={this.registerKey}
        />
        <Button
          id="disable"
          value="Cadastrar"
          onClick={() => addUser(this.state)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(null, mapDispatchToProps)(Register);
