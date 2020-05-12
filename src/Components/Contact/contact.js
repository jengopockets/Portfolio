import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form"
import { Card } from '@material-ui/core';
import history from '../util/hystory'
import axios from 'axios';

const thisStyles = makeStyles({
    root: {
        width: '400px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#3a5f42',
        border: '2px solid #ffffff',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: '12px',
        marginBottom: '5%',
        justifyContent: 'space-between',
        ['@media(max-width: 500px)']:{
            width: '90vw',
            height: '80vh',
            marginLeft:'3%' 
        },
    },
    input:{
        color: '#ffffff',
        borderRadius: '12px',
        border: '2px solid #ffffff',
        backgroundColor: '#000000',
        paddingBottom: '2%',
        letterSpacing: '1px',
        fontSize: '.5rem',
        // border:'2px dashed red'
    },
    formCard:{
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around'

    }

});

const Contacts = (props) => {
    const classes = thisStyles()
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        console.log(data.name);
        const mail = {
            name: data.name,
            email: data.email,
            number: data.number,
            message: data.message
        }
        console.log(mail);
        axios.post(`https://jengodevportfolio.herokuapp.com/mail`, mail)
        .then(res => {
            console.log(res);
            history.push('/')
        })
        .catch(err => {
            console.log(err);
        })
    };



    return(
        <div>
            <Card className={classes.root}>
                <h2>
                    Contact Me:
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.formCard}>
                    <div className={classes.input}>
                        <h2> Name</h2>
                        <input placeholder='Name' type="text" name="name" ref={register({required: true, maxLength: 20})}/>
                        {errors.name && "Name required"}
                    </div>
                    <div className={classes.input}>
                        <h2> Email</h2>
                        <input placeholder="email@emailserver.com" name="email" ref={register({ required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}/>
                        {errors.email && "Valid email required"}
                    </div>
                    <div className={classes.input}>
                        <h2> Phone Number</h2>
                        <input type="tel" name="number" placeholder="555-123-4567"  ref={register({required: true, minLength: 10, maxLength: 12})}/>
                        {errors.number && "Valid number required"}
                    </div>
                    <div className={classes.input}>
                        <h2> Message</h2>
                        <textarea placeholder="Enter message here" type="text" name="message" ref={register({ required: true, maxLength: 1000 })} className={classes.message}/>
                        {errors.message && "Please leave a message"}
                    </div>
                    <input type='submit' value="Send"/>

                </form>
            </Card>
        </div>
    )
}

export default Contacts