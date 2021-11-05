import React from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';

import classes from './NormalLoader.module.css';

const NormalLoader = () => {
	return (
		<ModalContainer className={classes.container}>
			<div className={classes.loader}></div>
		</ModalContainer>
	);
};

export default NormalLoader;
