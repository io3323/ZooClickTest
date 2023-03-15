import {StyleSheet, View} from 'react-native';
import RegButton from '../uiKit/RegButton';
import BackButton from '../uiKit/BackButton';
import {FC} from 'react';
import DisActiveRegButton from '../uiKit/DisActiveRegButton';

interface IButtonBlock {
  navigationName: string;
  buttonState: boolean;
}
const ButtonBlock: FC<IButtonBlock> = ({navigationName, buttonState}) => {
  return (
    <>
      {navigationName === '/' ? (
        <View style={styles.blockStyle}>
          <RegButton navigationName={navigationName} />
          <BackButton />
        </View>
      ) : (
        <View style={styles.blockStyle}>
          {buttonState ? (
            <RegButton navigationName={navigationName} />
          ) : (
            <DisActiveRegButton />
          )}
          <BackButton />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  blockStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ButtonBlock;
