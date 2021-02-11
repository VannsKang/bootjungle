import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bootcampActions } from '@/store/actions';
import { BootcampType } from '@/template';

// SECTION state
const initialState: BootcampType.BootcampState = {
  bootcamps: [],
  isLoading: false,
  error: null,
};

// SECTION reducers
const reducers = {
  getBootcampStart: bootcampActions.startLoading,
  getBootcampSuccesss(
    state: BootcampType.BootcampState,
    action: PayloadAction<BootcampType.Bootcamp[]>
  ) {
    console.log(action);
    state.bootcamps = action.payload;
    state.isLoading = false;
    state.error = null;
  },
  getBootcampFailed: bootcampActions.loadingFailed,
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
  getBootcampSuccesss,
} = bootcampSlice.actions;

export default bootcampSlice.reducer;
