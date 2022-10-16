import { useReducer } from "react";

type reducerState = {
  count: number,
}

type reducerActions = {
  type: 'ADD' | 'DEL' | 'RESET',
}

const initialState: reducerState = {
  count: 0,
}

const reducerFunction = (state: reducerState, action: reducerActions)  => {

  switch(action.type) {
    case 'ADD' :
      return {...state, count: state.count + 1}
    break;
    case 'DEL' : 
    if(state.count > 0)
      return {...state, count: state.count - 1}
    break;
    case 'RESET' : 
      return initialState;
    break;

  }

  return state;
}

export const useContagem = () => {

  return useReducer(reducerFunction, initialState)
}