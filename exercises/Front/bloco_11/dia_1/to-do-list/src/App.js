import logo from './logo.svg';
import './App.css';
import task from './Task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {task('Fazer almoço')}
          {task('Colocar roupa no varal')}
          {task('Estudar mais um pouco')}
        </p>
      </header>
    </div>
  );
}

export default App;
