import React from 'react';
import classes from './loader.module.css'

const Loader = (props) => (
	props.isLoading 
		? <h1 className={classes['loader-style']}>Loading</h1>      
		: null
)

export default Loader;
