import React from 'react';
import Project from './Components/Project/ProjectMap';
import { Router, Route } from 'react-router-dom';
import useFetch from './Components/CustomHooks/useFetch';
import history from './Components/util/hystory';
import './App.css';
import Navbar from './Components/Navbar/navBar';
import Home from './Components/Home/home';
import Contacts from './Components/Contact/contact';

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
            <Router history={history}>
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
                <Route
                  path='/contact'
                  render={() => <Contacts/>}
                />  
              </div>
            </Router>          
          </header>
        </div>
      );
    
    
  }};

export default App;
