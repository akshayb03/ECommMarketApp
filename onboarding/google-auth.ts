import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Platform} from 'react-native';

export const onGoogleSignIn = async () => {
  const androidClientId =
    '1028599261762-6esfiiepatku04hqo0m99kf1fcukpe2f.apps.googleusercontent.com';
  const iosClientId = '';

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: Platform.OS === 'android' ? androidClientId : iosClientId,
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  });

  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();

    if (idToken) {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      if (googleCredential) {
        return auth().signInWithCredential(googleCredential);
      }
      return null;
    }
    return null;
  } catch (error) {
    console.log('google_auth_error', error);
  }
};
