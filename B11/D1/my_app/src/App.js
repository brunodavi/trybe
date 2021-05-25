// import Comment from './Component'
// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {Task('Item 1')}
    </ul>
  );
}

export default App;