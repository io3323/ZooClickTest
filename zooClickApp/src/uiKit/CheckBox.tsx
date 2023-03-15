import {StyleSheet, TouchableOpacity} from 'react-native';
import {FC} from 'react';
import {color} from './color';

interface ICheckBox {
  state: boolean;
  tapFunc: (state: boolean) => void;
}
const CheckBox: FC<ICheckBox> = ({state, tapFunc}) => {
  return state ? (
    <TouchableOpacity
      style={styles.checkBoxActive}
      onPress={() => tapFunc?.(false)}
    />
  ) : (
    <TouchableOpacity
      style={styles.checkBoxDisActive}
      onPress={() => tapFunc?.(true)}
    />
  );
};

const styles = StyleSheet.create({
  checkBoxDisActive: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: color.dark.light,
    borderRadius: 5,
  },
  checkBoxActive: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: color.green,
    borderRadius: 5,
    backgroundColor: color.green,
  },
});
export default CheckBox;
