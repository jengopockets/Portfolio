import React from 'react';

const Card = (props) => {
    return(
        <div key={props.card.id}>
            <h2>{props.card.project_name}</h2>
            <img src={props.card.project_img} alt="Picture of Project" />
            <p>{props.card.porject_description}</p>  
            <div>
                
            </div>          
        </div>
    )
}