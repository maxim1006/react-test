import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyC_OwNaL1fOo9n_5z2XQlLrERlRORVgU_c',
    authDomain: 'react-test-518e3.firebaseapp.com',
    databaseURL: 'https://react-test-518e3.firebaseio.com',
    projectId: 'react-test-518e3',
    storageBucket: 'react-test-518e3.appspot.com',
    messagingSenderId: '119294409487',
    appId: '1:119294409487:web:e4855ad8536b9433945c7a',
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
