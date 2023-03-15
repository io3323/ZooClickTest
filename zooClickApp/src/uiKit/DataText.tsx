import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from './color';

interface IDataText {
  title: string;
  data: string;
}
const DataText: FC<IDataText> = ({title, data}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.dataStyle}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: color.green,
  },
  dataStyle: {
    fontSize: 20,
    fontWeight: '300',
    color: color.gray.dark,
    marginLeft: 10,
  },
});
export default DataText;
