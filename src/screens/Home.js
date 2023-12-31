import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';

import { ListItem, EmptyList } from '../components';
import useRankController from '../view-controllers/useRankController';
import { SHADOW_STYLE, colors, dimensions, fontSizes, fontWeights, styleGuide } from '../styles/globalStyles';
import { ASSETS } from '../assets';
import { DataTable, Modal, Portal } from 'react-native-paper';

const HomeScreen = () => {
  const { onEditValue, handleAlert, rankList, currentVal, showAlert } = useRankController();
  const [userNameTxt, setUserNameTxt] = useState('')

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
      <View style={styles.headingView}>
        <Image
          source={ASSETS.search}
          style={styles.flagIcon}
        />
        {/* text input and search button */}
        <View
          style={styles.btnContainer} // The text input and the button should be in the center vertical of the screen
        >
          <View
            style={styles.headerBtn}
          >
            <Image
              source={ASSETS.searchInputIcon}
              style={styles.searchIcon}
            />
            <TextInput
              value={userNameTxt}
              style={styles.inputStyle}
              onChangeText={setUserNameTxt}
              cursorColor={colors.secondary}
              placeholder='User Name'
              placeholderTextColor={colors.light2}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onEditValue(userNameTxt)
            }}
            style={[styles.headerBtn, SHADOW_STYLE]}
          >
            <Text
              style={styles.btnText}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      {
        rankList.length && currentVal.length ?
          <ScrollView>
            <DataTable
              style={{
                justifyContent: 'flex-start',
                width: dimensions.fullWidth - 20,
                paddingBottom: 30 // to show last item of the table
              }}
            >
              <DataTable.Header>
                <DataTable.Title style={{ flex: 6 }} numberOfLines={2}>Name</DataTable.Title>
                <DataTable.Title style={{ flex: 2, justifyContent: 'center' }} numberOfLines={2} >Rank</DataTable.Title>
                <DataTable.Title style={{ flex: 5, justifyContent: 'center' }} numberOfLines={2}  >Number of bananas</DataTable.Title>
                <DataTable.Title style={{ flex: 4, justifyContent: 'center' }} textStyle={{ textAlign: 'center' }} numberOfLines={3} numeric>Is Searched User?</DataTable.Title>
              </DataTable.Header>
              {
                rankList.map((item, index) =>
                  <ListItem
                    item={item}
                    key={index}
                    rank={item.rank}
                    isSearchedUser={currentVal === item.name}
                  />
                )
              }
            </DataTable>
          </ScrollView>
          : null
      }
      <Portal>

        <Modal
          visible={showAlert}
          onDismiss={handleAlert}
          contentContainerStyle={{
            backgroundColor: colors.white,
            padding: styleGuide.padding,
            width: dimensions.fullWidth / 1.4,
            alignSelf: 'center',
            borderRadius: styleGuide.radius
          }}
        >
          <EmptyList />

        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: fontSizes.fs20,
    fontWeight: fontWeights.fw200,
    flex: 1,
    color: colors.white,
    textAlign: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: dimensions.fullWidth - styleGuide.padding * 3
  },
  background: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headingView: {
    backgroundColor: colors.primary,
    padding: styleGuide.padding,
    alignItems: 'center',
    height: dimensions.fullHeight / 2 - 50,
    justifyContent: 'flex-end'
  },
  inputStyle: {
    fontSize: fontSizes.fs20,
    fontWeight: fontWeights.fw200,
    height: 45,
    width: dimensions.fullWidth / 2 - styleGuide.padding * 7,
    color: colors.white
  },
  headerBtn: {
    color: colors.white,
    height: 45,
    alignItems: 'center',
    width: dimensions.fullWidth / 2 - styleGuide.padding * 2,
    marginTop: styleGuide.padding,
    backgroundColor: colors.secondary,
    borderRadius: styleGuide.radius,
    flexDirection: 'row',
  },
  flagIcon: {
    height: dimensions.fullWidth / 2.5,
    width: dimensions.fullWidth / 2.5,
    marginBottom: dimensions.fullWidth / 4.5
  },
  searchIcon: {
    height: 22,
    width: 22,
    marginHorizontal: styleGuide.padding
  }
});

export default HomeScreen;
