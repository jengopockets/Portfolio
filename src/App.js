import React, { useState } from 'react';
import Project from './Components/Project/ProjectMap';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
    id: 1,
    project_name: 'Crime Stats For Travelers',
    project_img: 'https://raw.githubusercontent.com/Bryce-Soghigian/Ocean_Portfolio/master/src/Components/Projects/Crime.png',
    project_description:'This was a project where we mapped US crime data from the FBI Database.',
    },
    {
    id: 2,
    project_name: 'Crime Stats For Travelers',
    project_img: './Crime.png',
    project_description:'This was a project where we mapped US crime data from the FBI Database.',
    },
    {
    id: 3,
    project_name: 'Crime Stats For Travelers',
    project_img: './Crime.png',
    project_description:'This was a project where we mapped US crime data from the FBI Database.',
    },
    {
    id: 4,
    project_name: 'Crime Stats For Travelers',
    project_img: './Crime.png',
    project_description:'This was a project where we mapped US crime data from the FBI Database.',
    }
  ])

  
  return (
    <div className="App">
      <header className="App-header">
        <Project cards={cards}/>
        
      </header>
    </div>
  );
}

export default App;
