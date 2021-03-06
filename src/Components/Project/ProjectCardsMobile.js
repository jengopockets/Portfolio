import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import cardBack from '../../image/playing-card-ace.JPG';
import { FaGithub } from 'react-icons/fa';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const thisStyles = makeStyles({
    root: {
        width: '100vw',
        height: '83vh',
        marginLeft: '0%',
        marginRight: '5%',
        border: '1px solid black',
        borderRadius: "12px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: 'url(' + cardBack +')',
        backgroundSize: '100vw 90vh'
        
        
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
        marginTop:'20%',
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
        marginTop: '5%',
        marginRight: '2%',
        marginLeft: '2%',
        borderRadius: '12px',
        height: '20%',
        color:'white',
        justifySelf:'center',
        backgroundColor: 'black',
        opacity: 0.7
    },
    gitButton:{
        fontSize: '3rem',
        color: '#000000'
    }
    
})


 const PostCard = props => {
    const classes = thisStyles();
    const [open, setOpen] = useState(true)

    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false);
    };
    
    return(
        <>
            <Card className={classes.root} key={props.card.id} variant="outlined" >
                <Typography className={classes.title} variant="h4" component="h2">{props.card.project_name}</Typography>
                <a href={props.card.site} className={classes.indexUp} target='_blank' rel="noopener noreferrer" alt="Site-Link">
                <CardMedia className={classes.media} image={props.card.project_img} title="Project" />            
                </a>
                <Typography variant="body1" component="p" className={classes.content}>{props.card.project_description}</Typography>  
                <div>
                    <a href={props.card.git} className={classes.gitButton} target='_blank' rel="noopener noreferrer"  alt="Git-Link">
                        <FaGithub/>
                    </a>
                </div>          
            </Card>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="info" variant="filled">Swipe To see More Projects</Alert>
            </Snackbar>
        </>

        
    )
}

export default PostCard;