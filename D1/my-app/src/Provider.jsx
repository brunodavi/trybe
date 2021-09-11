import { createContext, Component } from 'react';

export const Context = createContext();

export default class Provider extends Component {
  render() {
    const { children } = this.props;
    return <Context.Provider value="Teste">{children}</Context.Provider>;
  }
}
