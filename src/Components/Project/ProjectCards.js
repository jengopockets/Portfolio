import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import cardBack from '../../image/playing-card-ace.JPG';
import cardFront from '../../image/playing-card-front.jpg';
import ReactCardFlip from 'react-card-flip';
import { Icon, Tooltip } from '@material-ui/core';

const thisStyles = makeStyles({
    root: {
        width: '400px',
        height: '600px',
        border: '1px solid black',
        borderRadius: "12px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: 'url(' + cardBack +')',
        backgroundSize: 'cover'               
        
    },
    rootFront: {
        width: '400px',
        height: '600px',
        border: '1px solid black',
        borderRadius: "12px",
        backgroundImage: 'url(' + cardFront +')',
        backgroundSize: 'cover'
        
        
        
    },
    media: {
        border: '1px solid red',
        height:200,
        marginTop: '10%',
        marginRight: '5%',
        marginLeft: '5%',
    },
    title: {
        border: '1px solid red',
        marginTop:'1%',
        marginRight: '2%',
        marginLeft: '2%',
        borderRadius: '12px',
        height: '15%',
        color:'white',
        justifySelf:'center',
        backgroundColor: 'black',
        textAlign: 'center',
        opacity: 0.7
    },
    content: {
        border: '1px solid red',
        marginRight: '2%',
        marginLeft: '2%',
        borderRadius: '12px',
        height: '20%',
        color:'white',
        justifySelf:'center',
        backgroundColor: 'black',
        opacity: 0.7
    },
    backButton: {
        borderRadius:'50%',
        fontSize:50,
        backgroundColor:'black',
        color:'white',
        opacity: 0.7,
        alignSelf:'center',
        marginTop: '3%'
    }
    
})


 const PostCard = props => {
    const [flipped, setFlipped] = useState(true)
    const classes = thisStyles();

    function handleClick(e){
        e.preventDefault();
        setFlipped(!flipped)        
    }
    return(
        <ReactCardFlip isFlipped={flipped}>
            <Tooltip title="Click to Flip Card" placement="right-start">
            <Card className={classes.root} key={props.card.id} variant="outlined" >
                <Icon className={classes.backButton} onClick={handleClick}>arrow_back</Icon>
                <Typography className={classes.title} variant="h4" component="h2">{props.card.project_name}</Typography>
                <a href={props.card.site} className={classes.indexUp} target='_blank' rel="noopener noreferrer" alt="Site-Link">
                <CardMedia className={classes.media} image={props.card.project_img} title="Project" />            
                </a>
                <Typography variant="body1" component="p" className={classes.content}>{props.card.project_description}</Typography>  
                <div>
                    <a href={props.card.git} className={classes.gitButton} target='_blank' rel="noopener noreferrer" alt="Git-Link">
                        <Icon className="fa fa-github"/>
                    </a>
                </div>          
            </Card>
            </Tooltip>
            <Tooltip title="Click to Flip Card" placement="right-start">
            <Card className={classes.rootFront} onClick={handleClick}>
                
            </Card>
            </Tooltip>
        </ReactCardFlip>
    )
}

export default PostCard;