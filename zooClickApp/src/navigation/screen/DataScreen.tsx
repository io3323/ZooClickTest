import SafeAreaView from 'react-native-safe-area-view';
import Wrapper from '../../components/Wrapper';
import HeaderTitle from '../../components/HeaderTitle';
import DataUserBlock from '../../components/DataUserBlock';
import {StyleSheet, View} from 'react-native';

const DataScreen = () => {
  return (
    <SafeAreaView>
      <Wrapper navigationNames={'/'} buttonState={true}>
        <HeaderTitle name={'Введенные данные'} />
        <View style={styles.mainContainer}>
          <DataUserBlock />
        </View>
      </Wrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
});

export default DataScreen;
