import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ICompanyQuestion,
  IRegScreen,
  IServiceQuestion,
  IWorkQuestionScreen,
  IYourQuestion,
  mainState,
} from './interfaces';
import {
  buttonController,
  serviceButtonController,
} from '../../function/function';
import validator from 'validator';
import {validateOptions} from '../../config/validateOptions';

const initialState: mainState = {
  regScreen: {
    mail: {
      value: '',
      state: false,
    },
    phone: {
      value: '',
      state: false,
    },
    buttonController: false,
    validateState: false,
  },
  workQuestionScreen: {
    meBox: false,
    ipBox: false,
    buttonController: false,
  },
  companyQuestionScreen: {
    companyName: '',
    name: '',
    buttonController: false,
  },
  yourQuestionScreen: {
    surname: '',
    name: '',
    patronymic: '',
    buttonController: false,
  },
  serviceQuestion: {
    remoteWork: {state: false, type: 'remote'},
    homeWork: {state: false, type: 'home'},
    driveWork: {state: false, type: 'drive'},
    moscowLocation: false,
    moscowRegion: false,
    treaty: false,
    buttonController: false,
  },
};

export const infoSlice = createSlice({
  name: 'infoState',
  initialState: initialState,
  reducers: {
    changeRegScreenInfo(state, action: PayloadAction<IRegScreen>) {
      const reg = state.regScreen;
      if (action.payload.mail?.value !== undefined) {
        reg.mail!.value = action.payload.mail.value;
        if (validator.isEmail(reg.mail!.value, validateOptions.email)) {
          reg.mail!.state = true;
        } else {
          reg.mail!.state = false;
        }
        if (buttonController(reg.mail!.state!, reg.phone!.state!)) {
          reg.buttonController = true;
        } else {
          reg.buttonController = false;
        }
        return state;
      }
      if (action.payload.phone?.value !== undefined) {
        reg.phone!.value = action.payload.phone.value;
        if (validator.isMobilePhone(action.payload.phone.value, ['ru-RU'])) {
          reg.phone!.state = true;
        } else {
          reg.phone!.state = false;
        }
        if (buttonController(reg.mail!.state!, reg.phone!.state!)) {
          reg.buttonController = true;
        } else {
          reg.buttonController = false;
        }
        return state;
      }
    },
    changeWorkQuestionScreen(
      state,
      action: PayloadAction<IWorkQuestionScreen>,
    ) {
      if (action.payload.ipBox !== undefined) {
        state.workQuestionScreen.ipBox = action.payload.ipBox;
        if (state.workQuestionScreen.ipBox !== false) {
          state.workQuestionScreen.buttonController = true;
        } else {
          state.workQuestionScreen.buttonController = false;
        }
        return state;
      }
      if (action.payload.meBox !== undefined) {
        state.workQuestionScreen.meBox = action.payload.meBox;
        if (state.workQuestionScreen.meBox !== false) {
          state.workQuestionScreen.buttonController = true;
        } else {
          state.workQuestionScreen.buttonController = false;
        }
        return state;
      }
    },
    changeCompanyQuestionScreen(
      state,
      action: PayloadAction<ICompanyQuestion>,
    ) {
      const company = state.companyQuestionScreen;
      if (action.payload.companyName !== undefined) {
        company.companyName = action.payload.companyName;
        if (
          buttonController(company.companyName!.length, company.name!.length)
        ) {
          company.buttonController = true;
        } else {
          company.buttonController = false;
        }
        return state;
      }
      if (action.payload.name !== undefined) {
        company.name = action.payload.name;
        if (
          buttonController(company.companyName!.length, company.name.length)
        ) {
          company.buttonController = true;
        } else {
          company.buttonController = false;
        }
        return state;
      }
    },
    changeYourQuestionScreen(
      state,
      action: PayloadAction<IYourQuestion, string>,
    ) {
      const your = state.yourQuestionScreen;
      if (action.payload.name !== undefined) {
        your.name = action.payload.name;
        if (buttonController(your.name!.length, your.surname!.length)) {
          your.buttonController = true;
        } else {
          your.buttonController = false;
        }
        return state;
      }
      if (action.payload.surname !== undefined) {
        your.surname = action.payload.surname;
        if (buttonController(your.name!.length, your.surname.length)) {
          your.buttonController = true;
        } else {
          your.buttonController = false;
        }
        return state;
      }
      if (action.payload.patronymic !== undefined) {
        your.patronymic = action.payload.patronymic;
        return state;
      }
    },
    changeServiceQuestionScreen(
      state,
      action: PayloadAction<IServiceQuestion>,
    ) {
      const serviceAction = action.payload;
      const serviceState = state.serviceQuestion;
      if (serviceAction.remoteWork?.type === 'remote') {
        if (serviceAction.remoteWork.state) {
          serviceState.remoteWork!.state = false;
          serviceState.buttonController = serviceButtonController(
            state.serviceQuestion,
          );
          return state;
        } else if (!serviceState.remoteWork!.state) {
          serviceState.remoteWork!.state = true;
          serviceState.buttonController = serviceButtonController(
            state.serviceQuestion,
          );
          return state;
        }
      }
      if (serviceAction.homeWork?.type === 'home') {
        if (serviceAction.homeWork.state) {
          serviceState.homeWork!.state = false;
          serviceState.buttonController = serviceButtonController(
            state.serviceQuestion,
          );
          return state;
        } else if (!serviceState.homeWork!.state) {
          serviceState.homeWork!.state = true;
          serviceState.buttonController = serviceButtonController(
            state.serviceQuestion,
          );
          return state;
        }
      }
      if (serviceAction.driveWork?.type === 'drive') {
        if (serviceAction.driveWork.state) {
          serviceState.driveWork!.state = false;
          serviceState.buttonController = serviceButtonController(
            state.serviceQuestion,
          );
          return state;
        } else if (!serviceState.driveWork!.state) {
          serviceState.driveWork!.state = true;
          serviceState.buttonController = serviceButtonController(
            state.serviceQuestion,
          );
          return state;
        }
      }
      if (serviceAction.moscowLocation !== undefined) {
        serviceState.moscowLocation = action.payload.moscowLocation;
        return state;
      }
      if (serviceAction.moscowRegion !== undefined) {
        serviceState.moscowRegion = action.payload.moscowRegion;
        return state;
      }
      if (serviceAction.treaty !== undefined) {
        serviceState.treaty = action.payload.treaty;
        return state;
      }
    },
  },
});

export default infoSlice.reducer;

export const {
  changeRegScreenInfo,
  changeWorkQuestionScreen,
  changeCompanyQuestionScreen,
  changeYourQuestionScreen,
  changeServiceQuestionScreen,
} = infoSlice.actions;
