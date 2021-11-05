import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useSortData from '../../hooks/useSortData';
import { dataAction } from '../../redux/slices/dataSlice';

const table = {
	Segment: 'Category',
	Category: 'Sub-Category',
	Region: 'State',
	State: 'City',
};

const InnerDropdown = () => {
	const {
		data: { sortedData, keys, type },
	} = useSelector((state) => state);
	const getSortedData = useSortData();
	const dispatch = useDispatch();

	const _onSelectDeeper = ({ label }) => {
		const filterValue = table[type];
		const newKeys = [...keys];

		if (!filterValue) {
			return;
		}
		console.log(label);
		console.log(sortedData);
		const data = sortedData.find((data) => data.key === label);

		console.log({ filterValue, data });

		if (data) {
			getSortedData(data.value, filterValue);
			dispatch(dataAction.setkeys(newKeys));
		}
	};

	const furtherDropDown = () =>
		keys.map((key) => {
			return { value: key, label: key };
		});

	return (
		<>
			<Dropdown
				options={furtherDropDown()}
				onChange={_onSelectDeeper}
				value={''}
			></Dropdown>
		</>
	);
};

export default InnerDropdown;
