import React from 'react';
import { StyleSheet, View } from "react-native";
import {color} from './color';

const DisActiveCheckBox = () => {
  return <View style={styles.checkBoxDisActive} />;
};

const styles = StyleSheet.create({
  checkBoxDisActive: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: color.gray.light,
    borderRadius: 5,
  },
});

export default DisActiveCheckBox;
