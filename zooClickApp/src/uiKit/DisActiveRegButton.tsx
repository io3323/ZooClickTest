import {StyleSheet, Text, View} from 'react-native';
import {color} from './color';

const DisActiveRegButton = () => {
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.textButtonStyle}>Продолжить</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '95%',
    height: 56,
    backgroundColor: color.gray.cool,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    color: color.white,
  },
});

export default DisActiveRegButton;
