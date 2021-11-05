export const backDropVariant = {
	initial: {
		opacity: 0,
	},

	animate: {
		opacity: 1,
	},
};

export const modalVariant = {
	initial: {
		opacity: 0,
		y: '-100vh',
	},

	animate: {
		opacity: 1,
		y: '0',
		transition: { delay: 0.5 },
	},
};
