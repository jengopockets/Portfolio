import React from 'react';
import './Project.css'

const Card = (props) => {
    return(
        <div key={props.card.id}>
            <h2>{props.card.project_name}</h2>
            <img src={props.card.project_img} alt="Project" />
            <p>{props.card.project_description}</p>  
            <div>
                <i></i>
            </div>          
        </div>
    )
}

export default Card;