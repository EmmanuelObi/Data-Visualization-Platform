import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../Pagination/Pagination';
import './Table.css';

const Table = () => {
	const {
		data: { allData },
	} = useSelector((state) => state);
	const [currentPage, setCurrentPage] = useState(0);
	const [postPerPage] = useState(10);

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentDataSet = allData.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	console.log(currentDataSet);

	return (
		<div className='table p-4'>
			<div className='table-main mx-auto'>
				<div className='table-head'>
					<div>
						<span>Customer Name</span>
						<span>Customer ID</span>
						<span>Product Name</span>
						<span>Segment</span>
						<span>Category</span>
						<span>Quantity</span>
						<span>Region</span>
						<span>State</span>
						<span>City</span>
						<span>Ship Mode</span>
					</div>
				</div>
				<div className='table-body'>
					{currentDataSet.map((data) => (
						<div key={data['Order ID']}>
							<span>{data['Customer Name']}</span>
							<span>{data['Customer ID']}</span>
							<span>{data['Product Name']}</span>
							<span>{data['Segment']}</span>
							<span>{data['Category']}</span>
							<span>{data['Quantity']}</span>
							<span>{data['Region']}</span>
							<span>{data['State']}</span>
							<span>{data['City']}</span>
							<span>{data['Ship Mode']}</span>
						</div>
					))}
				</div>
				<Pagination
					dataPerPage={postPerPage}
					allData={allData.length}
					paginate={paginate}
				/>
			</div>
		</div>
	);
};

export default Table;
