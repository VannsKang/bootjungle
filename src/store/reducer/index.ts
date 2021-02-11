import { combineReducers } from '@reduxjs/toolkit';
import rankingReducer from '@/store/reducer/rankingSlice';
import bootcampReducer from '@/store/reducer/bootcampSlice';
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

const rootReducer = combineReducers({
  rankingReducer,
  bootcampReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
