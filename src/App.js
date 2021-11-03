import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InfoPage from './pages/InfoPage';
import Homesite from './pages/Homesite';

function App() {
  return (
    <div className="App">
<Homesite/>
      <Route component={MainPage} path={["/"]} exact/>
      <Route component={InfoPage} path={["/Info"]} exact/>
     
    </div>
  );
}

export default App;