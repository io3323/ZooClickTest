import {StyleSheet, View} from 'react-native';
import Wrapper from '../../components/Wrapper';
import {CompanyQuestionScreenName, YourQuestionScreenName} from './screenName';
import CheckBoxForm from '../../components/CheckBoxForm';
import {color} from '../../uiKit/color';
import HeaderTitle from '../../components/HeaderTitle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {changeWorkQuestionScreen} from '../../redux/slice/infoSlice';

const WorkQuestionScreen = () => {
  const mainState = useSelector((state: RootState) => state.infoState);
  const dispatch = useDispatch();
  const tapFuncIP = (state: boolean) => {
    dispatch(changeWorkQuestionScreen({ipBox: state}));
  };
  const tapFuncME = (state: boolean) => {
    dispatch(changeWorkQuestionScreen({meBox: state}));
  };
  return (
    <Wrapper
      navigationNames={
        mainState.workQuestionScreen.ipBox
          ? CompanyQuestionScreenName
          : mainState.workQuestionScreen.meBox
          ? YourQuestionScreenName
          : ''
      }
      buttonState={mainState.workQuestionScreen.buttonController!}>
      <HeaderTitle name={'Как Вы работаете?'} />
      <View>
        <View style={styles.checkBoxContainer}>
          <CheckBoxForm
            tapFunc={tapFuncIP}
            secondState={mainState.workQuestionScreen.meBox!}
            state={mainState.workQuestionScreen.ipBox!}
            placeholder={'На себя, я частный специалист'}
          />
          <CheckBoxForm
            tapFunc={tapFuncME}
            secondState={mainState.workQuestionScreen.ipBox!}
            state={mainState.workQuestionScreen.meBox!}
            placeholder={'Я ИП или представитель компании'}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: color.green,
    marginBottom: 30,
  },
  checkBoxMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default WorkQuestionScreen;
