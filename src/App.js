import "./App.css";
import Today from '../src/UI/Today'

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-left">
        <Today/>
      </div>
      <div className="app-right"></div>
    </div>
  );
}

export default App;
