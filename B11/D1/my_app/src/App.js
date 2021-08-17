import Component from './Component'
// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <Component>{Task('Testing')}</Component>
  );
}

export default App;