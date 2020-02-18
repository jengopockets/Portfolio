import React from 'react';
import ReactSwipe from 'react-swipe';
import ProjectCardsMobile from './ProjectCardsMobile';
import { makeStyles } from '@material-ui/core/styles';

const thisStyles = makeStyles({
    
})


const ProjectSwipe = (props) => {
    const classes = thisStyles()
    let reactSwipeEl;

    return(
        <div>
            <ReactSwipe  childCount={props.cards.length} swipeOptions={{ continuous: true}} ref={el => (reactSwipeEl = el)}>
                {props.cards.map(card => {
                 return  <div> <ProjectCardsMobile key={card.id} card={card}/> </div>
                })}
            </ReactSwipe>
        </div>
    )
}
export default ProjectSwipe;