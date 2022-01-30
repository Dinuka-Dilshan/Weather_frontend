import "./App.css";
import Today from '../src/UI/Today';
import Dashboard from "./UI/Dashboard";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-left">
        <Today/>
      </div>
      <div className="app-right">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
