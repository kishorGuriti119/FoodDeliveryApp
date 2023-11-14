import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const SignInwithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        '601443215006-avrrlumrtndfjvadqcn7dhakknv04dqc.apps.googleusercontent.com',

      scopes: ['profile', 'email'],
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredentials);
    return userInfo;
  } catch (error) {
    console.log(error);
    return null;
  }
};
