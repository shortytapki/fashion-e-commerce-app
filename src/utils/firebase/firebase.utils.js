import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGEgchek66OiWRjV_5bIksmJOGwH4SpHo',
  authDomain: 'crown-db-7096a.firebaseapp.com',
  projectId: 'crown-db-7096a',
  storageBucket: 'crown-db-7096a.appspot.com',
  messagingSenderId: '1022853106305',
  appId: '1:1022853106305:web:41be11eab08df75617db80',
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creditedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creditedAt,
      });
    } catch (error) {
      console.log('Error creating the user', error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;
  const user = await createUserWithEmailAndPassword(auth, email, password);
  user.user.displayName = displayName;
  createUserDocumentFromAuth(auth.currentUser);
};
