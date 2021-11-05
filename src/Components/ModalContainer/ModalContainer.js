import React from 'react';
import classes from './ModalContainer.module.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { backDropVariant } from './modalContainerVariants';

const ModalContainer = (props) => {
	return (
		<motion.div
			variants={backDropVariant}
			animate='animate'
			initial='initial'
			className={`${classes.container} ${props.className}`}
		>
			{props.children}
		</motion.div>
	);
};

ModalContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element,
};

export default ModalContainer;
