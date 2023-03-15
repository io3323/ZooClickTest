import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CompanyQuestionScreenName,
  DataScreenName,
  MainRegScreenName,
  ServiceQuestionScreenName,
  WorkQuestionScreenName,
  YourQuestionScreenName,
} from '../screen/screenName';
import MainRegScreen from '../screen/MainRegScreen';
import WorkQuestionScreen from '../screen/WorkQuestionScreen';
import CompanyQuestionScreen from '../screen/CompanyQuestionScreen';
import YourQuestionScreen from '../screen/YourQuestionScreen';
import ServiceQuestionScreen from '../screen/ServiceQuestionScreen';
import DataScreen from '../screen/DataScreen';
const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MainRegScreenName}
        component={MainRegScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={WorkQuestionScreenName}
        component={WorkQuestionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CompanyQuestionScreenName}
        component={CompanyQuestionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={YourQuestionScreenName}
        component={YourQuestionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ServiceQuestionScreenName}
        component={ServiceQuestionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={DataScreenName}
        component={DataScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
