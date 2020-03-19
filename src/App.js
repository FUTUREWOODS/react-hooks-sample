import React, { useReducer } from 'react';

import reducer from './reducer';
import CountItem from './CountItem';
import AppContext from './AppContext';


const App = () => {

  const [state, dispatch] = useReducer(reducer, 0);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CountItem />
    </AppContext.Provider>
  );
}

export default App;
