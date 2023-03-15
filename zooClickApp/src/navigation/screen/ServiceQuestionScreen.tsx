import {View, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Wrapper from '../../components/Wrapper';
import {DataScreenName} from './screenName';
import HeaderTitle from '../../components/HeaderTitle';
import CarIcon from '../../assets/Car.png';
import HomeIcon from '../../assets/Home.png';
import Computer from '../../assets/Computer.png';
import ToggleFormBlock from '../../components/ToggleFormBlock';
import CheckBoxForm from '../../components/CheckBoxForm';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {changeServiceQuestionScreen} from '../../redux/slice/infoSlice';

const ServiceQuestionScreen = () => {
  const mainState = useSelector((state: RootState) => state.infoState);
  const dispatch = useDispatch();
  const switchRemoteWork = (state: boolean) => {
    dispatch(
      changeServiceQuestionScreen({remoteWork: {state: state, type: 'remote'}}),
    );
  };
  const switchHomeWork = (state: boolean) => {
    dispatch(
      changeServiceQuestionScreen({homeWork: {state: state, type: 'home'}}),
    );
  };
  const switchDriveWork = (state: boolean) => {
    dispatch(
      changeServiceQuestionScreen({driveWork: {state: state, type: 'drive'}}),
    );
  };
  const checkBoxMoscow = (state: boolean) => {
    dispatch(changeServiceQuestionScreen({moscowLocation: state}));
  };
  const checkBoxMoscowRegion = (state: boolean) => {
    dispatch(changeServiceQuestionScreen({moscowRegion: state}));
  };
  const checkBoxTreaty = (state: boolean) => {
    dispatch(changeServiceQuestionScreen({treaty: state}));
  };
  return (
    <SafeAreaView>
      <Wrapper
        navigationNames={DataScreenName}
        buttonState={mainState.serviceQuestion.buttonController!}>
        <HeaderTitle name={'Где вы оказываете услуги?'} />
        <ToggleFormBlock
          image={CarIcon}
          text={'Работаю удаленно'}
          switchState={mainState.serviceQuestion.remoteWork!.state!}
          onValueChange={switchRemoteWork}
        />
        <ToggleFormBlock
          image={HomeIcon}
          text={'Принимаю у себя'}
          switchState={mainState.serviceQuestion.homeWork!.state!}
          onValueChange={switchHomeWork}
        />
        <ToggleFormBlock
          image={Computer}
          text={'Выезжаю к клиентам'}
          switchState={mainState.serviceQuestion.driveWork!.state!}
          onValueChange={switchDriveWork}
        />
        <View style={styles.mainCheckContainer}>
          <View style={styles.checkBoxContainer}>
            <CheckBoxForm
              state={mainState.serviceQuestion.moscowLocation!}
              placeholder={'Москва'}
              tapFunc={checkBoxMoscow}
            />
            <CheckBoxForm
              state={mainState.serviceQuestion.moscowRegion!}
              placeholder={'Московская область'}
              tapFunc={checkBoxMoscowRegion}
            />
            <CheckBoxForm
              state={mainState.serviceQuestion.treaty!}
              placeholder={'По согласованию'}
              tapFunc={checkBoxTreaty}
            />
          </View>
        </View>
      </Wrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    alignItems: 'flex-start',
  },
  mainCheckContainer: {
    marginLeft: 55,
    width: '100%',
    alignItems: 'flex-start',
  },
});

export default ServiceQuestionScreen;
