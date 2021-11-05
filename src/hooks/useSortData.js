import { useDispatch } from 'react-redux';
import { dataAction } from '../redux/slices/dataSlice';

const useSortData = () => {
	const dispatch = useDispatch();
	const getKeys = (data = [], type) => {
		let obj = {};

		data.forEach((element) => {
			obj[element[type]] = element;
		});
		const keys = Object.keys(obj);

		const sortedData = getTotalAmountFromKeys(data, keys, type);
		dispatch(dataAction.setkeys(keys));

		dispatch(dataAction.setSortData(sortedData));
		getGraphData(sortedData);
	};

	const getGraphData = (data) => {
		const newData = data.map(({ key, value }) => {
			const priceArray = getTotalAmountPerkey(value);
			const sales = reduceArrayToGetTotalAmount(priceArray, 'sales');
			const cost_price = reduceArrayToGetTotalAmount(
				priceArray,
				'costPrice'
			);
			return {
				name: key,
				'Total Number': value.length,
				'Cost price': cost_price,
				'Selling Price': sales,
			};
		});
		dispatch(dataAction.setSortGraphData(newData));
	};

	const getTotalAmountFromKeys = (data = [], keys = [], type) =>
		keys.map((key) => {
			const value = data.filter((element) => element[type] === key);
			return { value, key };
		});

	const getTotalAmountPerkey = (data = []) =>
		data.map((element) => {
			const costPrice = element.Sales - element.Profit;
			return { costPrice, sales: +element.Sales };
		});

	const reduceArrayToGetTotalAmount = (array = [], elementType) => {
		let amount = 0;
		for (let i = 0; i < array.length; i++) {
			amount = amount + array[i][elementType];
		}
		return amount;
	};

	return getKeys;
};

export default useSortData;
