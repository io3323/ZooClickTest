import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import {FC} from 'react';
import {color} from '../uiKit/color';

interface IToggleFormBlock {
  image: number;
  text: string;
  switchState: boolean;
  onValueChange: (state: boolean) => void;
}
const ToggleFormBlock: FC<IToggleFormBlock> = ({
  image,
  text,
  switchState,
  onValueChange,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text>{text}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          value={switchState}
          onValueChange={() => onValueChange?.(switchState)}
          trackColor={{false: color.gray.dark, true: color.green}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: color.dark.cool,
  },
  imageContainer: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  switchContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
});
export default ToggleFormBlock;
