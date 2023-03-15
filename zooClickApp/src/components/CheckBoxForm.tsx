import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '../uiKit/CheckBox';
import {FC} from 'react';
import {color} from '../uiKit/color';
import DisActiveCheckBox from '../uiKit/DisActiveCheckBox';

interface ICheckBoxForm {
  state: boolean;
  secondState?: boolean;
  placeholder: string;
  tapFunc: (state: boolean) => void;
}
const CheckBoxForm: FC<ICheckBoxForm> = ({
  state,
  placeholder,
  tapFunc,
  secondState,
}) => {
  return (
    <View style={styles.mainContainer}>
      {secondState ? (
        <DisActiveCheckBox />
      ) : (
        <CheckBox state={state} tapFunc={tapFunc} />
      )}
      <Text style={styles.textStyle}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  textStyle: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: color.dark.cool,
  },
});
export default CheckBoxForm;
