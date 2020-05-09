import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {FaReact, FaPython, FaNodeJs, FaGitAlt} from 'react-icons/fa'
import {Avatar, Card, Tooltip, Snackbar} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import ReactCardFlip from 'react-card-flip';
import "./home.css";
const thisStyles = makeStyles({
    root: {
        width: '400px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#3a5f42',
        border: '2px solid #ffffff',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: '12px',
        marginBottom: '2rem',
        justifyContent: 'space-around',
        ['@media(max-width: 500px)']:{
            width: '90vw',
            height: '80vh',
            marginLeft:'3%' 
        },
    },
    large: {
        width: '200px',
        height: '200px',
        border: '2px solid #ffffff',
        alignSelf:'center'
    },
    textColor:{
        color: '#ffffff',
        borderRadius: '12px',
        border: '2px solid #ffffff',
        backgroundColor: '#000000',
        paddingBottom: '2%',
        letterSpacing: '1px',
    },
    pColor:{
        color: '#ffffff',
        paddingBottom: '2%',
        letterSpacing: '1px',
        fontSize: '1.2rem'
    },
    faContainer:{
        display:'grid',
        gridTemplateColumns: '50% 50%',
        gridRow: 'auto auto',
        gridColumnGap: '5px',
        gridRowGap: '5px',
        fontSize:'1.5rem',
    },
    faRCon:{
        color:'rgb(97, 218, 251)',
        flexDirection:'column',
        justifyContent:'space-around',
        '& h3':{
            marginTop: '0'
        }
    },
    faNCon:{
        color:'#ADDB67',
        flexDirection:'column',
        justifyContent:'space-around',
        '& h3':{
            marginTop: '0'
        }
    },
    faPCon:{
        color:'#4B8BBE',
        flexDirection:'column',
        justifyContent:'space-around',
        '& h3':{
            marginTop: '0'
        }
    },
    faGCon:{
        color:'#f14e32',
        flexDirection:'column',
        justifyContent:'space-around',
        '& h3':{
            marginTop: '0'
        }
    },
    
})
const Home = () => {
    const [flipped, setFlipped] = useState(true)
    const [open, setOpen] = useState(true)
    const classes = thisStyles();


    function handleClick(e){
        e.preventDefault();
        setFlipped(!flipped)
    }
    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false);
    };

    return(
        <>
        <ReactCardFlip isFlipped={flipped} >
            
            <Tooltip title="Click to Flip Card" placement="right-start">
            <Card className={classes.root} onClick={handleClick}>
                <h2 className={classes.textColor}>
                    Software Development
                </h2>
                <div className={classes.faContainer}>
                    <div className={classes.faRCon}>
                        <div>
                            <FaReact/>
                        </div>
                        <h3>
                            React
                        </h3>
                    </div>
                    <div className={classes.faNCon}>
                        <div>
                            <FaNodeJs/>
                        </div>
                        <h3>
                            Node JS
                        </h3>
                    </div>
                    <div className={classes.faPCon}>
                        <div>
                            <FaPython/>
                        </div>
                        <h3>
                            Python
                        </h3>
                    </div>
                    <div className={classes.faGCon}>
                        <div>
                            <FaGitAlt/>
                        </div>
                        <h3>
                            Git
                        </h3>
                    </div>
                </div>
                <p className={classes.pColor}>
                    I am a Full Stack Web Developer interested in web development and robotics. I am currently a Team Lead at Lambda School learning new things every day. I am skilled in React, Redux, JavaScript, and have started diving into Python. 
                </p>
            </Card>
            </Tooltip>
            <Tooltip title="Click to Flip Card" placement="right-start">
            <Card className={classes.root} onClick={handleClick}>
                <h1 className={classes.textColor}>
                    Jacob Tharp
                </h1>
                <Avatar alt="Jacob Tharp" src={require("../../image/Jacob.jpg")} className={classes.large} />
                <h2 className={classes.textColor}>
                    Full Stack Developer
                </h2>
            </Card>
            </Tooltip>
            

        </ReactCardFlip>
        
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="info" variant="filled">Click or touch the title to learn more!</Alert>
        </Snackbar>
        </>
    );
}

export default Home;