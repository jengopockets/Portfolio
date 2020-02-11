import React from 'react';
import Card from './ProjectCards';
import './Project.css'

const Projects = props => {
    console.log(props);

    return(
        <div className="cards">
            {props.cards.map(card =>
                {return <Card key={card.id} card={card} />
                })}
        </div>
    );
}

export default Projects;