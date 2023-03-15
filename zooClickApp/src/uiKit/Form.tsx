import {StyleSheet, TextInput, View} from 'react-native';
import Separator from './Separator';
import {FC} from 'react';

interface IForm {
  value: string;
  placeholder: string;
  dispatchFunc: (name: string) => void;
  inputMode: 'none' | 'text' | 'numeric' | 'email';
}
const Form: FC<IForm> = ({placeholder, dispatchFunc, value, inputMode}) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={text => dispatchFunc?.(text)}
        value={value}
        inputMode={inputMode}
      />
      <Separator />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '95%',
    height: 50,
    alignSelf: 'center',
  },
});
export default Form;
