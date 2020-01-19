import React from 'react';
import classes from './loader.module.css'


const Loader = (props) => (
	props.isLoading 
		? <div className={classes["lds-dual-ring"]}></div>
		: null
)


export default Loader;
