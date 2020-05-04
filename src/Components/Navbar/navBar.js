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
     
    
})



const Navbar = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    return(
        <div className='navbar'>
            <BottomNavigation 
            value={value} 
            onChange={(e, newValue) => { 
                setValue(newValue)
                
                
                }} 
            showLabels
            selected 
            className={classes.root}>

            <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
            <BottomNavigationAction component={NavLink} to="/portfolio" label="Portfolio" icon={<AppsIcon/>}/>
            <BottomNavigationAction label="Contact" icon={<PersonIcon/>}/>

            </BottomNavigation>
        </div>
    )
}
export default Navbar;