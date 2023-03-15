export interface IRegScreen {
  mail?: IRegProp;
  phone?: IRegProp;
  buttonController?: boolean;
  validateState?: boolean;
}

interface IRegProp {
  value?: string;
  state?: boolean;
}

export interface IWorkQuestionScreen {
  meBox?: boolean;
  ipBox?: boolean;
  buttonController?: boolean;
}

export interface ICompanyQuestion {
  companyName?: string;
  name?: string;
  buttonController?: boolean;
}

export interface IYourQuestion {
  surname?: string;
  name?: string;
  patronymic?: string;
  buttonController?: boolean;
}

interface ISwitchState {
  state?: boolean;
  type?: string;
}

export interface IServiceQuestion {
  remoteWork?: ISwitchState;
  homeWork?: ISwitchState;
  driveWork?: ISwitchState;
  moscowLocation?: boolean;
  moscowRegion?: boolean;
  treaty?: boolean;
  buttonController?: boolean;
}

export interface mainState {
  regScreen: IRegScreen;
  workQuestionScreen: IWorkQuestionScreen;
  companyQuestionScreen: ICompanyQuestion;
  yourQuestionScreen: IYourQuestion;
  serviceQuestion: IServiceQuestion;
}
