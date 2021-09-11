import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        key: '',
      },
      signIn: null,
    };

    this.loginEmail = this.loginEmail.bind(this);
    this.loginKey = this.loginKey.bind(this);
    this.login = this.login.bind(this);
  }

  loginEmail(email) {
    this.setState(({ user: { key } }) => ({ user: { email, key } }));
  }

  loginKey(key) {
    this.setState(({ user: { email } }) => ({ user: { email, key } }));
  }

  login(users, user) {
    console.log(users, user);
    const signIn = users.some(
      ({ email, key }) => email === user.email && key === user.key
    );
    this.setState({ signIn });
  }

  render() {
    const { user, signIn } = this.state;
    const { users } = this.props;

    if (signIn) {
      return <Redirect push to="/logged" />;
    } else if (signIn === false) {
      alert('Email e senha inválidos');
    }

    return (
      <div>
        <Input
          label="Email:"
          type="email"
          message="Faça algo similar à test123@gmail.com"
          regex={/^[a-zA-Z][\w._]{5,}@[a-z]{5,}\.com(\.br)?$/}
          handleChange={this.loginEmail}
        />
        <Input
          label="Senha:"
          type="password"
          message="Crie uma senha entre 8 e 64 caracteres"
          regex={/^\w{8,64}$/}
          handleChange={this.loginKey}
        />
        <Button onClick={() => this.login(users, user)} value="Logar" />
        <Link to="/register">
          <Button value="Cadastrar" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
