import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  currentVal: '',
  rankList: []
};

export const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {
    updateCurrentValue: (state, action) => {
      state.currentVal = action.payload
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setRankList: (state, action) => {
      state.rankList = action.payload
    }
  },
});

const { setUserList, updateCurrentValue, setRankList } = rankSlice.actions;

export const RankAction = {
  setUserList, updateCurrentValue, setRankList
};

export default rankSlice.reducer;
