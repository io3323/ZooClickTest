import {IServiceQuestion} from '../redux/slice/interfaces';

export function buttonController(
  first: boolean | number,
  second: boolean | number,
) {
  if (typeof first === 'boolean') {
    if (first && second) {
      return true;
    } else {
      return false;
    }
  } else {
    if (first > 0 && second > 0) {
      return true;
    } else {
      return false;
    }
  }
}
export function serviceButtonController(obj: IServiceQuestion) {
  const {remoteWork, homeWork, driveWork} = obj;
  if (!remoteWork?.state && !homeWork?.state && !driveWork?.state) {
    return false;
  } else {
    return true;
  }
}
