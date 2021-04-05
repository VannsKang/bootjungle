import { PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from '@/typings';
import { AppThunk } from '@/store';
import { apiCourse } from '@/api';
import {
	getCourseFailed,
	getCourseStart,
	getCourseSuccesss,
} from '@/store/reducer';

// SECTION reducers factory
const startLoading = (state: CourseType.CourseState) => {
	state.isLoading = true;
};

const loadingFailed = (
	state: CourseType.CourseState,
	action: PayloadAction<string>
) => {
	state.isLoading = false;
	state.error = action.payload;
};

// SECTION actions
export const fetchCourse = (api: string): AppThunk => async (dispatch) => {
	try {
		dispatch(getCourseStart());
		const courses = await apiCourse.getCourseItems(api);
		dispatch(getCourseSuccesss(courses));
	} catch (error) {
		dispatch(getCourseFailed(error.toString()));
	}
};

export default {
	startLoading,
	loadingFailed,
};
