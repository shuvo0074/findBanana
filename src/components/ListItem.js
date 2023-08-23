import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';
import { DataTable } from 'react-native-paper';


const ListItem = ({
  item = {
    "bananas": 0,
    "lastDayPlayed": "1970-01-01",
    "longestStreak": 1,
    "name": "",
    "stars": 0,
    "subscribed": false,
    "uid": "-1"
  },
  rank = -1,
  isSearchedUser = false
}) => {
  return (
    <DataTable.Row>
      <DataTable.Cell style={{ flex: 5 }} textStyle={styles.cellTxt(isSearchedUser)}>{item.name}</DataTable.Cell>
      <DataTable.Cell style={{ flex: 2, justifyContent: 'center' }} numeric>{rank}</DataTable.Cell>
      <DataTable.Cell style={{ flex: 5, justifyContent: 'center' }} >{item.bananas}</DataTable.Cell>
      <DataTable.Cell style={{ flex: 3, justifyContent: 'center' }} >{isSearchedUser ? 'yes' : 'no'}</DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  cellTxt: isSelected => ({
    color: isSelected ? colors.primary : colors.dark
  })
});

export default ListItem;
