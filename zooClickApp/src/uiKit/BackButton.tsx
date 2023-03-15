import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color} from './color';
const BackButton = () => {
  const navigation = useNavigation();
  const pressButton = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={() => pressButton()} style={styles.buttonStyle}>
      <Text style={styles.textButtonStyle}>НАЗАД</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '95%',
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    color: color.green,
  },
});
export default BackButton;
