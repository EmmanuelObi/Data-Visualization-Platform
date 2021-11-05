import React from 'react';
import './piechart.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import randomColor from 'randomcolor';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const PieChartComponent = () => {
	const {
		data: { sortedGraphData },
	} = useSelector((state) => state);

	const generateRandomColors = () =>
		[...sortedGraphData].map((data) => {
			return { color: randomColor(), name: data.name };
		});

	return (
		<>
			{sortedGraphData.length > 0 && (
				<ResponsiveContainer aspect={1.8}>
					<PieChart>
						<Pie
							data={sortedGraphData}
							cx='50%'
							cy='50%'
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={150}
							dataKey='Total Number'
						>
							{sortedGraphData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={
										generateRandomColors()[
											index %
												generateRandomColors().length
										].color
									}
								/>
							))}
						</Pie>
						<Legend verticalAlign='top' height={36} />
					</PieChart>
				</ResponsiveContainer>
			)}
		</>
	);
};

export default PieChartComponent;
