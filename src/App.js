
import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { NewsBoard } from './components/NewsBoard';


function App() {

  const [category,setCategory] = useState("general");
  return (
    <div className="App">
      <NavBar setCategory={setCategory}></NavBar>
      <NewsBoard category={category}></NewsBoard>
    </div>
  );
}

export default App;
