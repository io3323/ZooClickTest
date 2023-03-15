import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Wrapper from '../../components/Wrapper';
import {ServiceQuestionScreenName} from './screenName';
import HeaderTitle from '../../components/HeaderTitle';
import FormBlock from '../../components/FormBlock';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {changeYourQuestionScreen} from '../../redux/slice/infoSlice';

const YourQuestionScreen = () => {
  const mainState = useSelector((state: RootState) => state.infoState);
  const dispatch = useDispatch();
  const dispatchName = (name: string) => {
    dispatch(changeYourQuestionScreen({name: name}));
  };
  const dispatchSurname = (name: string) => {
    dispatch(changeYourQuestionScreen({surname: name}));
  };
  const dispatchPatronymic = (name: string) => {
    dispatch(changeYourQuestionScreen({patronymic: name}));
  };
  return (
    <SafeAreaView>
      <Wrapper
        navigationNames={ServiceQuestionScreenName}
        buttonState={mainState.yourQuestionScreen.buttonController!}>
        <HeaderTitle name={'Как Вас зовут? '} />
        <Text>
          Пожалуйста, укажите Ваши ФИО как в паспорте, это важно для проверке
        </Text>
        <FormBlock
          placeholder={'Фамилия'}
          dispatchFunc={dispatchName}
          value={mainState.yourQuestionScreen.name!}
          inputMode={'none'}
        />
        <FormBlock
          placeholder={'Имя'}
          dispatchFunc={dispatchSurname}
          value={mainState.yourQuestionScreen.surname!}
          inputMode={'none'}
        />
        <FormBlock
          placeholder={'Отчество'}
          dispatchFunc={dispatchPatronymic}
          value={mainState.yourQuestionScreen.patronymic!}
          inputMode={'none'}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

export default YourQuestionScreen;
