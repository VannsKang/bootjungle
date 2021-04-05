import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { courseActions } from '@/store/actions';
import { CourseType } from '@/typings';

// SECTION state
const initialState: CourseType.CourseState = {
	courses: [],
	filters: [],
	isLoading: false,
	error: null,
};

// SECTION reducers
const reducers = {
	getCourseStart: courseActions.startLoading,
	getCourseSuccesss(
		state: CourseType.CourseState,
		action: PayloadAction<CourseType.CourseData>
	) {
		state.courses = action.payload.courses;
		state.filters = action.payload.filters;
		state.isLoading = false;
		state.error = null;
	},
	getCourseFailed: courseActions.loadingFailed,
};

// SECTION slices
const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers,
	extraReducers: (builder) => {},
});

export const {
	getCourseStart,
	getCourseFailed,
	getCourseSuccesss,
} = courseSlice.actions;

export default courseSlice.reducer;
