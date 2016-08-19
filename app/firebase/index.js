import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBun-IZCwA07QblsKzN943B-aDkyiqFbGY",
      authDomain: "nicohaenggi-todo-app.firebaseapp.com",
      databaseURL: "https://nicohaenggi-todo-app.firebaseio.com",
      storageBucket: "nicohaenggi-todo-app.appspot.com",
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
