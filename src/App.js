//import logo from './logo.svg';
import Practice from './practice';
import Practice1 from './practice1';
import './App.css';
import Hooks1 from './hooks1';
import Hooks2 from './hooks2';
import Hooks3 from './hooks3';
import Hooks4 from './hooks4';
let name='disha';


function App() {
  return (
    <>
    <div className="App">
    <Practice name={name} course='react'/>
    {/* <Practice1/> */}
   <button type="button" class="btn btn-primary">Primary</button> 
    </div>
    {/* demo file till he */}

    <Hooks1/>
    <Hooks2/>
    <Hooks3/>
    <Hooks4/>
    </>
    );
}

export default App;
