import React from 'react';


const Card = (props) => {
    return(
        <div className="card" key={props.card.id}>
            <h2>{props.card.project_name}</h2>
            <a href={props.card.site} alt="Site-Link">
            <img src={props.card.project_img} alt="Project" />            
            </a>
            <p>{props.card.project_description}</p>  
            <div>
                <a href={props.card.git} className="fa fa-github" alt="Git-Link">{null}</a>
            </div>          
        </div>
    )
}

export default Card;