import {StyleSheet, View} from 'react-native';
import {color} from './color';

const Separator = () => {
  return <View style={styles.lineStyle} />;
};

const styles = StyleSheet.create({
  lineStyle: {
    width: '95%',
    height: 1,
    backgroundColor: color.green,
  },
});
export default Separator;
