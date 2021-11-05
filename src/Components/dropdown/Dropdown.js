/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
import useSortData from '../../hooks/useSortData';
import { dataAction } from '../../redux/slices/dataSlice';

const options = [
	{ value: 'Region', label: 'Region' },
	{
		value: 'Segment',
		label: 'Segment',
	},
	{
		value: 'Ship Mode',
		label: 'Ship Mode',
	},
	{
		value: 'Category',
		label: 'Category',
	},
	{
		value: 'State',
		label: 'State',
	},
	{
		value: 'Sub-Category',
		label: 'Sub-Category',
	},
];

const DropdownContainer = () => {
	const {
		data: { allData, type },
	} = useSelector((state) => state);
	const getSortedData = useSortData();
	const dispatch = useDispatch();

	useEffect(() => {
		allData.length > 0 && getSortedData(allData, type);
	}, [type, allData]);

	const _onSelect = ({ value }) => {
		dispatch(dataAction.setType(value));
	};

	return (
		<>
			{allData.length > 0 && (
				<>
					<div className='dropdown'>
						<p>Filter by:</p>
						<Dropdown
							options={options}
							onChange={_onSelect}
							value={type}
						></Dropdown>
					</div>
				</>
			)}
		</>
	);
};

export default DropdownContainer;
