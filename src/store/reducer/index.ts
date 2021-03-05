import { combineReducers } from '@reduxjs/toolkit';
import rankingReducer from '@/store/reducer/rankingSlice';
import bootcampReducer from '@/store/reducer/bootcampSlice';
import courseReducer from '@/store/reducer/courseSlice';
export {
  getRankingFailed,
  getRankingStart,
  getRankingSuccesss,
} from '@/store/reducer/rankingSlice';
export {
  getBootcampFailed,
  getBootcampStart,
  getBootcampSuccesss,
} from '@/store/reducer/bootcampSlice';
export {
  getCourseFailed,
  getCourseStart,
  getCourseSuccesss,
} from '@/store/reducer/courseSlice';

const rootReducer = combineReducers({
  rankingReducer,
  bootcampReducer,
  courseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
