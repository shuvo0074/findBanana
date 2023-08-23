import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights, styleGuide } from '../styles/globalStyles';
import { ASSETS } from '../assets';
import { useSelector } from 'react-redux';


const EmptyList = ({}) => {
  const {
    currentVal
  } = useSelector(state => state.rank);
  return (
    <View
      style={{
        width: dimensions.fullWidth / 1.5,
        alignSelf: 'center'
      }}
    >
      <Image
        source={ASSETS.emptyList}
        resizeMode='contain'
        style={styles.imageStyle}
      />
      <Text
        style={styles.listEmptyTxt}
      >
        User with name "{currentVal}" not found
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: dimensions.fullWidth / 6,
    width: dimensions.fullWidth / 6,
    alignSelf: 'center',
    marginVertical:styleGuide.padding
  },
  listEmptyTxt: {
    fontSize: fontSizes.fs22,
    fontWeight: fontWeights.fw600,
    color: colors.primary,
    alignSelf: 'center',
    marginVertical: styleGuide.padding,
  }
});

export default EmptyList;
