import React, { useState } from 'react';
import Card from './ProjectCards';
import './Project.css'

const Projects = props => {
    console.log(props);

    return(
        <div class="cards">
            {props.cards.map(card =>
                {return <Card key={card.id} card={card} />
                })}
        </div>
    );
}

export default Projects;