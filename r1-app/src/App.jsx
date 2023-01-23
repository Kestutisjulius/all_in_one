
import './App.css';

const bOStyle = {
  color: 'yellow',
  fontSize: '60px',
  fontWeight: 'bold'
};

function getRandomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}

const BoxOne = ()=>{

  return (<div className = "box" >1</div>);
}
const BoxTwo = ()=>{

  return (<div className = "box">2</div>);
}
const BoxThree = ()=>{

  return (<div className = "box">3</div>);
}
const BoxRandom = ()=>{

  return (<div className = "box" ><span style = {bOStyle}>{getRandomInt(10)}</span></div>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BoxOne/>
      <BoxTwo/>
      <BoxThree/>
      <BoxRandom/>

      </header>
    </div>
  );
}

export default App;
