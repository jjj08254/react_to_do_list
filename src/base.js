import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCfZ-8td5k87OBjOGXyhE4LgeVZE354DU0',
  authDomain: 'todo-list-practice-jojo-jack.firebaseapp.com',
  databaseURL: 'https://todo-list-practice-jojo-jack.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };
export default base;
