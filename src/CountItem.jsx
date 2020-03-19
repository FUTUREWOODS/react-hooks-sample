import React, { useContext } from 'react';
import AppContext from './AppContext';

export default () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      count:  {state} 
      <button onClick={() => dispatch({type: 'UP'})}>+</button>
      <button onClick={() => dispatch({type: 'DOWN'})}>-</button>
    </div>
  )
}
