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
                // (valorAtualDoReducer, Recebe os nomes das funçoes que que sera executada quando for alterar algum valor do reducer)
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

function App() {
     // [state: valor atual da funçao reduder (1° parametro da função), dispatch: as actios da função reduder (2º parametro da função)]
                                    // (reducerFunction: nome dado para a funçao reducer que criamos acima linha 15, initialState: valor inicial do state da função reducer)
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      Contagem: {state.count}
      <hr />
      <button onClick={() => dispatch({ type: "ADD" })}>Adicionar</button>
      <button onClick={() => dispatch({ type: "DEL" })}>Remover</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Resetar</button>
    </div>
  );
}

export default App;
