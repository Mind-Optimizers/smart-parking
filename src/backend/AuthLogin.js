import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

export async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

export async function onGoogleButtonPress() {
  // Get the users ID token

    GoogleSignin.configure({
      webClientId: '829619027200-4cv3tb91qilqoafjbql4nom0f82ff1jq.apps.googleusercontent.com'
    });

    
  const { idToken, accessToken } = await GoogleSignin.signIn();
  console.log(idToken, accessToken)
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken, accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}