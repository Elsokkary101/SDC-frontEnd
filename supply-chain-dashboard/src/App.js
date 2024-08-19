import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import MainDashboard from './components/MainDashboard/MainDashboard';

function App() {
  return (
    <div className="App">
      <div className = "appGlass">
        <Sidebar/>
        <MainDashboard/>
      </div>
    </div>
  );
}

export default App;
