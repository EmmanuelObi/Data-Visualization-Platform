import React from 'react';
import './Barchart.css';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const BarChartComponent = () => {
	const {
		data: { sortedGraphData },
	} = useSelector((state) => state);
	return (
		<>
			<ResponsiveContainer aspect={1.8}>
				<BarChart data={sortedGraphData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='Total Number' fill='#8884d8' />
				</BarChart>
			</ResponsiveContainer>
		</>
	);
};

export default BarChartComponent;
