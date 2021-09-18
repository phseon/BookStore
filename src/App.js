import './App.css';
import { Route } from 'react-router-dom';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <p>title</p>
      </header>
      <Route component={InfoPage} path={["/Info"]} exact/>
    </div>
  );
}

export default App;
