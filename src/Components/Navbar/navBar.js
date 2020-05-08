import React from 'react';
import {NavLink} from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import "./nav.css"

const useStyles = makeStyles({
    root:{
        backgroundColor:'#000000',
        
    },

    link:{
        color:"white"
        
    },
        
})



const Navbar = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState('Home')
    return(
        <div className='navbar'>
            <BottomNavigation 
            value={value} 
            onChange={(e, newValue) => { 
                console.log(newValue);
                setValue(newValue)
                
                
                }} 
            showLabels
            selected 
            className={classes.root}>

            <BottomNavigationAction component={NavLink} to="/" label="Home" value="Home" icon={<HomeIcon/>} className={classes.link}/>
            <BottomNavigationAction component={NavLink} to="/portfolio"  label="Portfolio" value="Portfolio" icon={<AppsIcon/>} className={classes.link}/>
            <BottomNavigationAction component={NavLink} to="/contacts" label="Contacts" value="Contacts" icon={<PersonIcon/>} className={classes.link}/>

            </BottomNavigation>
        </div>
    )
}
export default Navbar;