import React, { Component } from 'react';
import Input from '../components/Input';

export default class Login extends Component {
  render() {
    return (
      <form>
        <Input
          label="Email:"
          type="email"
          message="Faça algo similar à test123@gmail.com"
          regex={/^[\w._]{6,}@[a-z]{5,}\.com(\.br)?$/}
        />
        <Input
          label="Senha:"
          type="password"
          message="Crie uma senha entre 8 e 64 caracteres"
          regex={/^\w{8,64}$/}
        />
        <input type="submit" id="disabled" disabled />
      </form>
    );
  }
}
