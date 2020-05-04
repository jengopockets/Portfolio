import React from "react";
import "./home.css"

const Home = () => {
    return(
        <div>
            <h1>
                Jacob Tharp
            </h1>
            <h2>
                Full Stack Developer
            </h2>
            <img src={require("../../image/Jacob.jpg")} alt="Jacob"/>
        </div>
    );
}

export default Home;