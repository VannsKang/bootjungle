import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rankingActions } from '@/store/actions';
import { RankingType } from '@/typings';

// SECTION state
const initialState: RankingType.RankingState = {
	rankings: [],
	isLoading: false,
	error: null,
};

// SECTION reducers
const reducers = {
	getRankingStart: rankingActions.startLoading,
	getRankingSuccesss(
		state: RankingType.RankingState,
		action: PayloadAction<RankingType.Rankings>
	) {
		state.rankings = action.payload;
		state.isLoading = false;
		state.error = null;
	},
	getRankingFailed: rankingActions.loadingFailed,
};

// SECTION slices
const rankingSlice = createSlice({
	name: 'ranking',
	initialState,
	reducers,
	extraReducers: (builder) => {},
});

export const {
	getRankingStart,
	getRankingFailed,
	getRankingSuccesss,
} = rankingSlice.actions;

export default rankingSlice.reducer;
