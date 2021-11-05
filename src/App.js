/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChartComponent from './Components/charts/Barchart/BarChartComponent';
import Navbar from './Components/Navbar/Navbar';
import PieChartComponent from './Components/charts/PieChart/PieChartComponent';
import CompositeBarChart from './Components/charts/CompositeBarChart/CompositeBarChart';
import Table from './Components/charts/Table/Table';
import NormalLoader from './Components/NormalLoader/NormalLoader';
import useHttps from './hooks/useHttps';
import TimeSeriesChart from './Components/charts/TimeSeriesChart/TimeSeriesChart';
import DropdownContainer from './Components/dropdown/Dropdown';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
	const { sendRequest, loading } = useHttps();

	const {
		data: { allData },
	} = useSelector((state) => state);

	useEffect(() => {
		sendRequest();
	}, []);

	return (
		<div className='App'>
			{loading && <NormalLoader />}
			<Navbar />

			{allData.length > 0 && (
				<>
					<DropdownContainer />
					<div className='container-fluid charts p-4'>
						<div className='chart'>
							<BarChartComponent />
						</div>
						<div className='chart'>
							<PieChartComponent />
						</div>
						<div className='chart'>
							<CompositeBarChart />
						</div>

						<div className='chart'>
							<TimeSeriesChart />
						</div>
						<div className='tableContainer'>
							<Table />
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
