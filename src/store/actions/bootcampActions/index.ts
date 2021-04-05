import { PayloadAction } from '@reduxjs/toolkit';
import { BootcampType } from '@/typings';
import { AppThunk } from '@/store';
import { apiBootcamp } from '@/api';
import store from '@/store';
import {
	getBootcampFailed,
	getBootcampStart,
	getBootcamp,
	filterBootcamp,
	getBootcampSucceed,
} from '@/store/reducer';

// SECTION reducers factory
const startLoading = (state: BootcampType.BootcampState) => {
	state.isLoading = true;
};

const loadingSuceed = (state: BootcampType.BootcampState) => {
	state.isLoading = false;
	state.error = null;
};

const loadingFailed = (
	state: BootcampType.BootcampState,
	action: PayloadAction<string>
) => {
	state.isLoading = false;
	state.error = action.payload;
};

// SECTION actions
export const fetchBootcamp = (api: string): AppThunk => async (dispatch) => {
	try {
		dispatch(getBootcampStart());
		const bootcamps = await apiBootcamp.getBootcampItems(api);
		dispatch(getBootcamp(bootcamps));
		dispatch(getBootcampSucceed());
	} catch (error) {
		dispatch(getBootcampFailed(error.toString()));
	}
};

export const getFilterBootcamp = (id: number): AppThunk => async (dispatch) => {
	dispatch(getBootcampStart());

	console.log(id);
	const originBootcamps = store.getState().bootcampReducer.originBootcamps;
	const filteredBootcamps = originBootcamps.filter(
		(bootcamp) => bootcamp.score >= id
	);

	console.log(filteredBootcamps);
	// dispatch(filterBootcamp(filteredBootcamps));
	dispatch(getBootcampSucceed());
};

export default {
	startLoading,
	loadingSuceed,
	loadingFailed,
};
