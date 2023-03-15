import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ButtonBlock from './ButtonBlock';
import SafeAreaView from 'react-native-safe-area-view';
import React from 'react';

interface IWrapper {
  children: React.ReactNode;
  navigationNames: string;
  buttonState: boolean;
}
const Wrapper = ({children, navigationNames, buttonState}: IWrapper) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <View style={styles.upBlockContainer} />
          <View style={styles.centerBlockContainer}>{children}</View>
          <View style={styles.bottomBlockContainer}>
            <ButtonBlock
              navigationName={navigationNames}
              buttonState={buttonState}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  upBlockContainer: {
    display: 'flex',
    flex: 0.5,
  },
  centerBlockContainer: {
    display: 'flex',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBlockContainer: {
    display: 'flex',
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Wrapper;
