import { useSelector, useDispatch } from 'react-redux';
import { RankAction } from '../store/rankSlice';
const useRankViewModel = () => {
  const dispatch = useDispatch();
  const {
    rankList,
    currentVal,
    userList,
    showAlert
  } = useSelector(state => state.rank);

  const {
    setUserList, updateCurrentValue, setRankList, toggleAlert
  } = RankAction;

  return {
    rankList,
    currentVal,
    userList,
    showAlert,
    handleAlert: _ => {
      dispatch(toggleAlert())
    },
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
