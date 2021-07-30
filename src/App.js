import './App.css';
import Feed from './Feed';
import Profile from './profile';
import Lateral from './lateral'

function App() {
  return (
    <div className="app">



      <div className="app__body">
        <Profile />
        <Feed />
        <Lateral />
      </div>

    </div>
  );
}

export default App;
