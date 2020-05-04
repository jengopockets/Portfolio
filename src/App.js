import React from 'react';
import Project from './Components/Project/ProjectMap';
import { Route } from 'react-router-dom';
import useFetch from './Components/CustomHooks/useFetch';
import './App.css';
import Navbar from './Components/Navbar/navBar';
import Home from './Components/Home/home';

function App () {
  const res =  useFetch(`https://jengodevportfolio.herokuapp.com/api/project/projects`)
  

  if(res.response === null){
    return(
      <div className="spinner">
        <img className="spinimg"style={{animation: `spin 4s linear infinite`}} alt="Loading Chip" src={require("./image/LoadingChip.png")}/>
      </div>
    )
  }else{
    
      return (
        <div className="App">
          <header className="App-header">
            <Navbar/>
            <div className="page">
            <Route
            exact path='/'
            render={() => <Home/>}
            />
            <Route
              path='/portfolio'
              render={() => <Project cards={res.response}/>}
            />  
            </div>          
          </header>
        </div>
      );
    
    
  }};

export default App;
