import { useContagem } from "./reducers/contagem";


function App() {
  const [contagem, contagemDispatch] = useContagem();

  return (
    <div className="App">
      Contagem: {contagem.count}
      <hr />
      <button onClick={() => contagemDispatch({ type: "ADD" })}>Adicionar</button>
      <button onClick={() => contagemDispatch({ type: "DEL" })}>Remover</button>
      <button onClick={() => contagemDispatch({ type: "RESET" })}>Resetar</button>
    </div>
  );
}

export default App;
