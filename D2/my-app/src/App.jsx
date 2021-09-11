import { useState } from 'react';

import OtherList from './OtherList';
import Provider from './Provider';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    input: '',
    list: [],
    other: [],
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const addList = () => {
    setState({
      ...state,
      list: [...state.list, state.input],
    });
  };

  const passOther = () => {
    setState({
      ...state,
      list: [...state.list],
      other: [...state.other, ...state.list],
    });
  };

  return (
    <div>
      <input type="text" name="input" onChange={handleChange} />
      <div>
        <List list={state.list} />
        <Provider value={state.other}>
          <OtherList />
        </Provider>
      </div>
      <button onClick={addList}>
        Add
      </button>
      <button onClick={passOther}>
        Pass
      </button>
    </div>
  );
}
