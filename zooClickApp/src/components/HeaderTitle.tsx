import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {color} from '../uiKit/color';

interface IHeader {
  name: string;
}

const HeaderTitle: FC<IHeader> = ({name}) => {
  return <Text style={styles.textStyle}>{name}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 50,
    fontWeight: '700',
    fontSize: 24,
    color: color.green,
  },
});

export default HeaderTitle;
