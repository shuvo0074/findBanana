import { useEffect } from 'react';
import useRankViewModel from '../view-models/useRankViewModel';
const dataList = require('../assets/data/userData.json')


const useRankController = () => {
  const { currentVal, rankList, userList, updateRankList, updateUserList, onEditValue, removeRankList } = useRankViewModel();

  useEffect(() => {
    if (currentVal.length && userList.length) {
      const selectedItem = userList.find(i => i.name === currentVal)
      if (selectedItem?.rank > 10)
        updateRankList([...userList.slice(0, 9), selectedItem]);
      else
        updateRankList(userList.slice(0, 10));
    }
    else
      removeRankList()
  }, [currentVal]);

  useEffect(() => {
    updateUserList(Object.values(dataList).sort((a, b) =>
      b.bananas - a.bananas // descending order
    ).map((i, index) => ({ ...i, rank: index + 1 })))
  }, [])



  return {
    currentVal,
    rankList,
    onEditValue,
  };
};

export default useRankController;
