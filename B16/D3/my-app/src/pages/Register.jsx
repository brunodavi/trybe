import React, { Component } from 'react';
import Input from '../components/Input';

export default class Register extends Component {
  render() {
    return (
      <form>
        <Input
          label="Nome de usuário:"
          type="text"
          message="De a-z minúsculas entre 3 à 10 caracteres"
          regex={/^[a-z]{3,10}$/}
        />
        <Input
          label="Crie um email:"
          type="email"
          message="Faça algo similar à test123@gmail.com"
          regex={/^[\w._]{6,}@[a-z]{5,}\.com(\.br)?$/}
        />
        <Input
          label="Crie uma senha:"
          type="password"
          message="Crie uma senha entre 8 e 64 caracteres"
          regex={/^\w{8,64}$/}
        />
        <input type="submit" id="disabled" disabled />
      </form>
    );
  }
}
