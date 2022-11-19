import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div style={{color:"tan", fontSize:"50px" ,textAlign:"center"}}>WELCOME ANUPAM FOR REACT TUTORIAL</div> }/>
      <Route path='/about' element={<div style={{color:"red",fontSize:"50px"}}>ABOUT PAGE</div>}/>
      <Route path='/contact' element={<div style={{color:"orange",fontSize:"50px"}}>CONTACT PAGE 8299597070</div>}/>
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
