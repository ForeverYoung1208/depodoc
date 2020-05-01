import React from 'react';
import classes from './loader.module.css'
import PT from 'prop-types';

const Loader = (props) => (
	props.isLoading 
		? <div className={classes["lds-dual-ring"]}></div>
		: null
)


export default Loader;

Loader.propTypes = {
		isLoading: PT.bool.isRequired
};