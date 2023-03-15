import SafeAreaView from 'react-native-safe-area-view';
import Wrapper from '../../components/Wrapper';
import {ServiceQuestionScreenName} from './screenName';
import FormBlock from '../../components/FormBlock';
import HeaderTitle from '../../components/HeaderTitle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {changeCompanyQuestionScreen} from '../../redux/slice/infoSlice';

const CompanyQuestionScreen = () => {
  const mainState = useSelector((state: RootState) => state.infoState);
  const dispatch = useDispatch();
  const dispatchNameCompany = (name: string) => {
    dispatch(changeCompanyQuestionScreen({companyName: name}));
  };
  const dispatchNameUser = (name: string) => {
    dispatch(changeCompanyQuestionScreen({name: name}));
  };
  return (
    <SafeAreaView>
      <Wrapper
        navigationNames={ServiceQuestionScreenName}
        buttonState={mainState.companyQuestionScreen.buttonController!}>
        <HeaderTitle name={'Как называется Ваша компания?'} />
        <FormBlock
          placeholder={'Название компании'}
          dispatchFunc={dispatchNameCompany}
          value={mainState.companyQuestionScreen.companyName!}
          inputMode={'none'}
        />
        <FormBlock
          placeholder={'ФИО ответственного лица за анкету '}
          dispatchFunc={dispatchNameUser}
          value={mainState.companyQuestionScreen.name!}
          inputMode={'none'}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

export default CompanyQuestionScreen;
