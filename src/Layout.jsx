import React, { useReducer } from 'react';
import AppContext from './AppContext';
import reducer from './reducer';

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <header>Heder</header>
        {children}
        <div>start</div>
        { window.location.pathname === '/' && <div>news</div> }
      <footer>Footer</footer>
    </AppContext.Provider>
  )
}