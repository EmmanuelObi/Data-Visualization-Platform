import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allData: [],
	sortedGraphData: [],
	sortedData: [],
	type: 'Region',
	keys: [],
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setALLData(state, action) {
			state.allData = action.payload;
		},
		setSortData(state, action) {
			state.sortedData = action.payload;
		},
		setSortGraphData(state, action) {
			state.sortedGraphData = action.payload;
		},
		setType(state, action) {
			state.type = action.payload;
		},
		setkeys(state, action) {
			state.keys = action.payload;
		},
	},
});

export const dataReducer = dataSlice.reducer;
export const dataAction = dataSlice.actions;
