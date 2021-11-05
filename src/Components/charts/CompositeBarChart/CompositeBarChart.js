import React from 'react';
import './CompositeBarChart.css';
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

const CompositeBarChart = () => {
	const {
		data: { sortedGraphData },
	} = useSelector((state) => state);
	return (
		<div>
			<ResponsiveContainer aspect={2}>
				<BarChart
					width={500}
					height={400}
					data={sortedGraphData}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='Cost price' stackId='a' fill='#8884d8' />
					<Bar dataKey='Selling Price' stackId='a' fill='#b4fdbc' />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CompositeBarChart;
