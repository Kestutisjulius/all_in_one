
import './App.css';

const bOStyle = {
  color: 'yellow',
  fontSize: '60px',
  fontWeight: 'bold'
};

const BoxOne = ()=>{

  return (<div className = "box" style = {bOStyle}>1</div>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BoxOne/>
      <div className = "box">2</div>
      <div className = "box">3</div>
      

      </header>
    </div>
  );
}

export default App;
