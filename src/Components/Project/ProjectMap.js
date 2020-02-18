import React, {useState} from 'react';
import PostCard from './ProjectCards';
import Button, {makeStyles} from '@material-ui/core';
import ProjectSwipe from './ProjectMobile';
const thisStyle = makeStyles({
    cardContain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})
const Projects = props => {
    const classes = thisStyle();
    

if(window.innerWidth <= 500){
    return(
        <div>
            <ProjectSwipe cards={props.cards}/>
        </div>        
    )
}
    return(
        <div className={classes.cardContain}>
            {props.cards.map(card =>
                {return <PostCard key={card.id} card={card}/>
                })}
        </div>
    );
}

export default Projects;