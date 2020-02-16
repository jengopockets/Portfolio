import React, {useState} from 'react';
import PostCard from './ProjectCards';
import {makeStyles} from '@material-ui/core';
const thisStyle = makeStyles({
    cardContain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})
const Projects = props => {
    const classes = thisStyle();

    return(
        <div className={classes.cardContain}>
            {props.cards.map(card =>
                {return <PostCard key={card.id} card={card}/>
                })}
        </div>
    );
}

export default Projects;