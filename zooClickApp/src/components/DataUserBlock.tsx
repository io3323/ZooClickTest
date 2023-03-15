import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import DataText from '../uiKit/DataText';
import {color} from '../uiKit/color';

const DataUserBlock = () => {
  const data = useSelector((state: RootState) => state.infoState);
  return (
    <View style={styles.mainContainer}>
      <View>
        <DataText title={'Email:'} data={data.regScreen.mail!.value!} />
        <DataText
          title={'Номер телефона:'}
          data={data.regScreen.phone!.value!}
        />
      </View>
      <View style={styles.workContainer}>
        <Text style={styles.title}>Вид осуществления работы:</Text>
        {data.workQuestionScreen.meBox ? (
          <Text style={styles.data}>Работаю на себя</Text>
        ) : (
          <Text style={styles.data}>ИП</Text>
        )}
      </View>
      {data.workQuestionScreen.ipBox ? (
        <View>
          <DataText
            title={'Название компании:'}
            data={data.companyQuestionScreen.companyName!}
          />
          <DataText
            title={'ФИО ответственного лица:'}
            data={data.companyQuestionScreen.name!}
          />
        </View>
      ) : (
        <View>
          <DataText title={'Фамилия:'} data={data.yourQuestionScreen.name!} />
          <DataText title={'Имя:'} data={data.yourQuestionScreen.surname!} />
          <DataText
            title={'Отчество:'}
            data={data.yourQuestionScreen.patronymic!}
          />
        </View>
      )}
      <View style={styles.serviceContainer}>
        <Text style={styles.title}>Где будут оказываться услуги:</Text>
        {data.serviceQuestion.remoteWork!.state && (
          <Text style={styles.data}>- Работаю удалено</Text>
        )}
        {data.serviceQuestion.homeWork!.state && (
          <Text style={styles.data}>- Принимаю у себя</Text>
        )}
        {data.serviceQuestion.driveWork!.state && (
          <Text style={styles.data}>- Выезжаю к клиентам</Text>
        )}
        <Text style={styles.title}>Локация:</Text>
        {data.serviceQuestion.moscowLocation && (
          <Text style={styles.data}>- Москва</Text>
        )}
        {data.serviceQuestion.moscowRegion && (
          <Text style={styles.data}>- Московская область</Text>
        )}
        {data.serviceQuestion.treaty && (
          <Text style={styles.data}>- По согласованию</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: color.green,
  },
  data: {
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 10,
    color: color.gray.dark,
  },
  workContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },
  serviceContainer: {
    marginLeft: 10,
  }
});

export default DataUserBlock;
