import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ dataPerPage, allData, paginate }) => {
	const pageCount = allData / dataPerPage;

	return (
		<ReactPaginate
			pageCount={pageCount}
			pageRangeDisplayed={4}
			marginPagesDisplayed={4}
			previousLabel={'Prev'}
			nextLabel={'Next'}
			onPageChange={paginate}
			containerClassName={'paginate'}
			activeClassName={'paginateactive'}
			initialPage={0}
		></ReactPaginate>
	);
};

export default Pagination;
