import React from 'react';
import ReactSwipe from 'react-swipe';
import ProjectCardsMobile from './ProjectCardsMobile';




const ProjectSwipe = (props) => {

    return(
        <div>
            <ReactSwipe  childCount={props.cards.length} swipeOptions={{ continuous: true}} >
                {props.cards.map(card => {
                 return  <div> <ProjectCardsMobile key={card.id} card={card}/> </div>
                })}
            </ReactSwipe>
        </div>
    )
}
export default ProjectSwipe;