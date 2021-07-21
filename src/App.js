import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <button className="btn btn-primary">B-primary</button>
          <button className="btn btn-danger">B-danger</button>
          <button className="btn btn-success">B-success</button>
          <button className="btn btn-warning">B-warning</button>
          <button className="btn btn-info">B-info</button>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
