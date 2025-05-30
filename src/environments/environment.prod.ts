
export const environment = {
  production: false,
  apiUrl: 'https://dog.ceo/api/',


  // Cognito config para auth/login
  cognito: {
    domain: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_TNM3wqqf8',
    clientId: '5csrr209sjsp5mp4h5k9uc2v9a',
    redirectUri: 'http://localhost:8100/tabs',
    postLogoutRedirectUri: 'http://localhost:8100/login',
    scope: 'openid email phone',
    responseType: 'code'
  }
};
