import React, { useState } from 'react';
import Card from './ProjectCards';

const Projects = props => {
    console.log(props);

    return(
        <div>
            {props.cards.map(card =>
                {return <Card key={card.id} card={card} />
                })}
        </div>
    );
}

export default Projects;