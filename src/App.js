import React from 'react';
import Project from './Components/Project/ProjectMap';
import useFetch from './Components/CustomHooks/useFetch';
import './App.css';

function App () {
  const res =  useFetch(`https://jengodevportfolio.herokuapp.com/api/project/projects`)
  
//  const data = JSON.parse(res);
console.log(res);
if(res.response === null){
  return(
    <div>
      <h1>Loading</h1>
    </div>
  )
}else{
  return (
    <div className="App">
      <header className="App-header">
        <Project cards={res.response}/>
        
      </header>
    </div>
  );
}
}

export default App;
