import React, { useState } from 'react';
import Project from './Components/Project/ProjectMap';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
    id: 1,
    project_name: 'Crime Stats For Travelers',
    project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/Components/Project/Crime.png',
    project_description:'This was a project where we mapped US crime data from the FBI Database.',
    },
    {
    id: 2,
    project_name: 'Random Act Generator',
    project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/Components/Project/Random.png',
    project_description:'I wrote the backend to this project where I allowed for full CRUD fuctionallity and included an endpoint that would randomize data from the database to give to the front-end.',
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
