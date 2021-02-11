import { PayloadAction } from '@reduxjs/toolkit';
import { RankingType } from '@/template';
import { AppThunk } from '@/store';
import { apiHome } from '@/api';
import {
  getRankingFailed,
  getRankingStart,
  getRankingSuccesss,
} from '@/store/reducer';

// SECTION reducers factory
const startLoading = (state: RankingType.RankingState) => {
  state.isLoading = true;
};

const loadingFailed = (
  state: RankingType.RankingState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

// SECTION actions
export const fetchRanking = (api: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getRankingStart());
    const rankings = await apiHome.getRankingTables(api);
    dispatch(getRankingSuccesss(rankings));
  } catch (error) {
    dispatch(getRankingFailed(error.toString()));
  }
};

export default {
  startLoading,
  loadingFailed,
};
