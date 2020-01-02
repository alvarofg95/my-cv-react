import { CHANGE_LANGUAGE } from './actionTypes';

let cookiesService = null;

function changeLanguage(language) {
  console.log({ language });
  return dispatch => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: language
    });
    saveAppInfo(language);
  };
}

function saveAppInfo(language) {
  const appString = JSON.stringify({
    language
  });

  const encodedAppString = btoa(appString);
  const minutes = 60;
  let cookieExpirationTime = new Date();
  cookieExpirationTime.setTime(cookieExpirationTime.getTime() + 1000 * 60 * minutes);

  try {
    cookiesService.set('appInfo', encodedAppString, {
      path: '/',
      expires: cookieExpirationTime,
      sameSite: false
    });
  } catch (e) {
    console.error(`Error al guardar la información de la APP: ${e.message}`);
  }
}

function loadAppInfo(cookies) {
  return dispatch => {
    if (!cookiesService) {
      cookiesService = cookies;
    }
    const encodedAppString = cookiesService.get('appInfo');
    let decodedCookieString = '';
    if (encodedAppString) {
      decodedCookieString = atob(encodedAppString);
      const appInfo = { ...JSON.parse(decodedCookieString) };
      dispatch({ type: 'LOAD_APP_INFO', payload: appInfo });
    }
  };
}

export default {
  loadAppInfo,
  changeLanguage
};
