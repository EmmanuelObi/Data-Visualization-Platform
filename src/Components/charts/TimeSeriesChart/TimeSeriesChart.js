import React from 'react';
import { useSelector } from 'react-redux';
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
	ResponsiveContainer,
} from 'recharts';

const TimeSeriesChart = () => {
	const {
		data: { sortedGraphData },
	} = useSelector((state) => state);

	return (
		<>
			<ResponsiveContainer aspect={1.8}>
				<LineChart
					width={730}
					height={250}
					data={sortedGraphData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />

					<Legend />
					<Line
						type='monotone'
						dataKey='Cost price'
						stroke='#8884d8'
					/>
					<Line
						type='monotone'
						dataKey='Selling Price'
						stroke='#82ca9d'
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};

export default TimeSeriesChart;
