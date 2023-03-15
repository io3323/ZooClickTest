import {StyleSheet, View} from 'react-native';
import Form from '../uiKit/Form';
import {FC} from 'react';

interface IFormBlock {
  value: string;
  placeholder: string;
  dispatchFunc: (name: string) => void;
  inputMode: 'none' | 'text' | 'numeric' | 'email';
}
const FormBlock: FC<IFormBlock> = ({
  placeholder,
  dispatchFunc,
  value,
  inputMode,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Form
        placeholder={placeholder}
        dispatchFunc={dispatchFunc}
        value={value}
        inputMode={inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FormBlock;
