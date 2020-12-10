import React, { createContext,useReducer,useContext} from 'react';
const initialState = {
    counter1: 0,
    counter2:0, 
  
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          [action.name]: state[action.name] + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          [action.name]: state[action.name] - 1,
        };
      default:
        return state;
    }
  };
  
  const useValue = () => useReducer(reducer, initialState);
  
 export const Context = createContext(null);
  
  const useGlobalState = () => {
    const value = useContext(Context);
    if (value === null) throw new Error('Please add GlobalStateProvider');
    return value;
  };
  
  export const GlobalStateProvider = ({ children }) => (
    <Context.Provider value={useValue()}>{children}</Context.Provider>
  );
  
 export const Counter = ({ name }) => {
    const [state, dispatch] = useGlobalState();
    return (
      <div>
       
        <button className="buttonx"  onClick={() => dispatch({ type: 'INCREMENT', name })}>Kedvencek növelése</button>
       <div className="counter"> {state[name]}</div>
  
      </div>
      
    );
  };