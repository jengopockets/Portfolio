import React from 'react';
import Card from './ProjectCards';

const Projects = props => {
    return(
        <div>
            {props.cards.map(card =>
                {return <Card key={card.id} card={card} />
                })}
        </div>
    );
}