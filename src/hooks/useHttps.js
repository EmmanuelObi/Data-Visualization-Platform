/* eslint-disable no-undef */
import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dataAction } from '../redux/slices/dataSlice';

const useHttps = () => {
	const [loading, setLoading] = useState(false);
	const [cancel, setCancel] = useState(false);
	const dispatch = useDispatch();

	const httpErrorCallback = (response, responseCallback) => {
		if (response.status === 401) {
			throw new Error('Authentication Error');
		}

		if (!response.ok) {
			responseCallback && responseCallback(response);
			throw new Error('Something went wrong!');
		}
	};

	useEffect(() => {
		return () => {
			setCancel(true);
		};
	}, []);

	const sendRequest = useCallback(async () => {
		const body = {
			angular_test: 'angular-developer',
		};

		setLoading(true);

		const url = `https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
			});

			httpErrorCallback(response);
			if (cancel) {
				return;
			}

			const data = await response.json();

			dispatch(dataAction.setALLData(data));
			setLoading(false);
		} catch (err) {
			console.log(err.message);
			setLoading(false);
		}
	}, [cancel, dispatch]);

	return {
		sendRequest,
		loading,
	};
};

export default useHttps;
