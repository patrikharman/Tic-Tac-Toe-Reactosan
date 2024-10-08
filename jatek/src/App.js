
import './App.css';
import JatekTer from './/Components/Jatekter.js';

function App() {
  const LISTA = ['X','X','X','O','O','O','X','X','X']
  return (
    <div className="App">
      <header className="App-header"> Tic-Tac-Toe </header>
      <article className="jatekter">
          <JatekTer lista={LISTA}/>
      </article>
    </div>
  );
}

export default App;