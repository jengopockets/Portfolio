import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {FaReact} from 'react-icons/fa'
import {Avatar, Card} from "@material-ui/core";
import ReactCardFlip from 'react-card-flip';
import "./home.css";
const thisStyles = makeStyles({
    root: {
        width: '400px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: '12px',
        ['@media(max-width: 500px)']:{
            width: '90vw',
            height: '80vh',
            marginLeft:'3%' 
        },
    },
    large: {
        width: '200px',
        height: '200px',
        border: '2px solid #477148',
        alignSelf:'center'
    },
    textColor:{
        color: '#477148',
        borderRadius: '12px',
        border: '2px solid #477148',
        paddingBottom: '2%'
    },
    faContainer:{
        color:'rgb(97, 218, 251)',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        border:'2px dashed red'
    }
    
})
const Home = () => {
    const [flipped, setFlipped] = useState(true)
    const classes = thisStyles();

    function handleClick(e){
        e.preventDefault();
        setFlipped(!flipped)
    }

    return(
        <ReactCardFlip isFlipped={flipped}>
            <Card className={classes.root} onClick={handleClick}>
                <h2 className={classes.textColor}>
                    Software Development
                </h2>
            <div className={classes.faContainer}>
                <div>
                <FaReact/>
                </div>
                <h3>
                    React
                </h3>
            </div>
                <p className={classes.textColor}>
                I am a Full Stack Web Developer interested in web development and robotics. I am currently a Team Lead at Lambda School learning new things every day. I am skilled in React, Redux, JavaScript, and have started diving into Python. 
                </p>
            </Card>
            <Card className={classes.root} onClick={handleClick}>
                <h1 className={classes.textColor}>
                    Jacob Tharp
                </h1>
                <Avatar alt="Jacob Tharp" src={require("../../image/Jacob.jpg")} className={classes.large} />
                <h2 className={classes.textColor}>
                    Full Stack Developer
                </h2>
            </Card>

        </ReactCardFlip>

    );
}

export default Home;