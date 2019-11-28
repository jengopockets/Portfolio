import React from 'react';


const Card = (props) => {
    return(
        <div class="card" key={props.card.id}>
            <h2>{props.card.project_name}</h2>
            <img src={props.card.project_img} alt="Project" />
            <p>{props.card.project_description}</p>  
            <div>
                <a href="#" class="fa fa-github"></a>
            </div>          
        </div>
    )
}

export default Card;