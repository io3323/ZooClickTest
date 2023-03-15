import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FC} from 'react';
import {color} from './color';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
interface IRegButton {
  navigationName: string;
}
const RegButton: FC<IRegButton> = ({navigationName}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const data = useSelector((state: RootState) => state.infoState);
  const pressButton = () => {
    {
      navigationName === '/'
        ? console.log(data)
        : navigation.navigate(navigationName);
    }
  };
  return (
    <TouchableOpacity onPress={() => pressButton()} style={styles.buttonStyle}>
      <Text style={styles.textButtonStyle}>
        {navigationName === '/' ? 'Отправить' : 'Продолжить'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '95%',
    height: 56,
    backgroundColor: color.green,
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
export default RegButton;
