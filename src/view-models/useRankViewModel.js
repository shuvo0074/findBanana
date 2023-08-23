import { useSelector, useDispatch } from 'react-redux';
import { RankAction } from '../store/rankSlice';
const useRankViewModel = () => {
  const dispatch = useDispatch();
  const {
    rankList,
    currentVal,
    userList
  } = useSelector(state => state.rank);

  const {
    setUserList, updateCurrentValue, setRankList
  } = RankAction;

  return {
    rankList,
    currentVal,
    userList,
    updateUserList: (payload) => {
      dispatch(setUserList(payload))
    },
    updateRankList: (payload) => {
      dispatch(setRankList(payload))
    },
    onEditValue: (val) =>
      dispatch(updateCurrentValue(val)),
    removeRankList: _ => dispatch(setRankList([]))
  };
};

export default useRankViewModel;
