import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  currentVal: '',
  rankList: [],
  showAlert: false
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
    },
    toggleAlert: (state) => {
      state.showAlert = !state.showAlert
    }
  },
});

const { setUserList, updateCurrentValue, setRankList, toggleAlert } = rankSlice.actions;

export const RankAction = {
  setUserList, updateCurrentValue, setRankList, toggleAlert
};

export default rankSlice.reducer;
