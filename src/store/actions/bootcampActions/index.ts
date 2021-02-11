import { PayloadAction } from '@reduxjs/toolkit';
import { BootcampType } from '@/template';
import { AppThunk } from '@/store';
import { apiList } from '@/api';
import {
  getBootcampFailed,
  getBootcampStart,
  getBootcampSuccesss,
} from '@/store/reducer';

// SECTION reducers factory
const startLoading = (state: BootcampType.BootcampState) => {
  state.isLoading = true;
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
    const bootcamps = await apiList.getBootcampItems(api);
    dispatch(getBootcampSuccesss(bootcamps));
  } catch (error) {
    dispatch(getBootcampFailed(error.toString()));
  }
};

export default {
  startLoading,
  loadingFailed,
};
