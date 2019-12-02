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
    git: 'https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-fe',
    site: 'https://crimestatsfortravelers.com/'
    },
    {
    id: 2,
    project_name: 'Random Act Generator',
    project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/Components/Project/Random.png',
    project_description:'I wrote the backend to this project where I allowed for full CRUD fuctionallity and included an endpoint that would randomize data from the database to give to the front-end.',
    git: 'https://github.com/buildweek-random-acts-generator/back-end',
    site: 'https://lucid-panini-415838.netlify.com/'
    },
    {
    id: 3,
    project_name: 'Secret Family Recipie Cookbook',
    project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/Components/Project/Secret.png',
    project_description:'I was one of the front-end engineers on this project where I was responsible for CRUD fuctionallity.',
    git: 'https://github.com/secret-family-recipe-s-cookbook/cookbook-fe',
    site: 'https://secret-recipes.netlify.com/' 
    },
    {
    id: 4,
    project_name: 'Connect Our Kids',
    project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/Components/Project/Connect.png',
    project_description:'I was one of the UI designers on this project where we created a landing page with some JavaScript.',
    git: 'https://github.com/jengopockets/connect-our-kids.github.io',
    site: 'https://connect-our-kids.github.io/'
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
