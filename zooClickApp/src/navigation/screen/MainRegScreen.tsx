import Wrapper from '../../components/Wrapper';
import {WorkQuestionScreenName} from './screenName';
import FormBlock from '../../components/FormBlock';
import HeaderTitle from '../../components/HeaderTitle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {changeRegScreenInfo} from '../../redux/slice/infoSlice';
const MainRegScreen = () => {
  const dispatch = useDispatch();
  const dispatchEmail = (name: string) => {
    dispatch(changeRegScreenInfo({mail: {value: name}}));
  };
  const dispatchPhone = (name: string) => {
    dispatch(changeRegScreenInfo({phone: {value: name}}));
  };
  const mainState = useSelector((state: RootState) => state.infoState);
  return (
    <Wrapper
      navigationNames={WorkQuestionScreenName}
      buttonState={mainState.regScreen.buttonController!}>
      <HeaderTitle name={'Регистрация'} />
      <FormBlock
        value={mainState.regScreen.mail!.value!}
        placeholder={'Введите пожалуйста Ваш адрес электронной почты'}
        dispatchFunc={dispatchEmail}
        inputMode={'email'}
      />
      <FormBlock
        value={mainState.regScreen.phone!.value!}
        placeholder={'Введите пожалуйста Ваш телефон'}
        dispatchFunc={dispatchPhone}
        inputMode={'numeric'}
      />
    </Wrapper>
  );
};

export default MainRegScreen;
