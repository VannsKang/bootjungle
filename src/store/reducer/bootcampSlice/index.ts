import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bootcampActions } from '@/store/actions';
import { BootcampType } from '@/typings';

// SECTION state
const initialState: BootcampType.BootcampState = {
	bootcamps: [],
	originBootcamps: [],
	filters: [],
	isLoading: false,
	error: null,
};

// SECTION reducers
const reducers = {
	getBootcampStart: bootcampActions.startLoading,
	getBootcampSucceed: bootcampActions.loadingSuceed,
	getBootcampFailed: bootcampActions.loadingFailed,

	getBootcamp(
		state: BootcampType.BootcampState,
		action: PayloadAction<BootcampType.BootcampData>
	) {
		state.bootcamps = state.originBootcamps = action.payload.bootcamps;
		state.filters = action.payload.filters;
	},

	filterBootcamp(
		state: BootcampType.BootcampState,
		action: PayloadAction<BootcampType.FilteredBootcampData>
	) {
		state.bootcamps = action.payload.bootcamps;
	},
};

// SECTION slices
const bootcampSlice = createSlice({
	name: 'bootcamp',
	initialState,
	reducers,
	extraReducers: (builder) => {},
});

export const {
	getBootcampStart,
	getBootcampFailed,
	getBootcamp,
	filterBootcamp,
	getBootcampSucceed,
} = bootcampSlice.actions;

export default bootcampSlice.reducer;
