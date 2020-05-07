import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Card} from "@material-ui/core";
import "./home.css";
const thisStyles = makeStyles({
    root: {
        width: '400px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#000000',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: '12px'
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
    }
})
const Home = () => {
    const classes = thisStyles();
    return(
        <Card className={classes.root}>
            <h1 className={classes.textColor}>
                Jacob Tharp
            </h1>
            <Avatar alt="Jacob Tharp" src={require("../../image/Jacob.jpg")} className={classes.large} />
            <h2 className={classes.textColor}>
                Full Stack Developer
            </h2>
        </Card>
    );
}

export default Home;