import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Datafetching from './components/datafetching';
import Table from "./components/Table";


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Datafetching />
      <Table />
    </div>
  );
}

export default App;
