import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyD8XIdnvfE4xd0MkD-viTxCJd-7F7tcPM0",
        authDomain: "i-see-db.firebaseapp.com",
        databaseURL: "https://i-see-db.firebaseio.com",
        projectId: "i-see-db",
        storageBucket: "i-see-db.appspot.com",
        messagingSenderId: "985588621823",
        appId: "1:985588621823:web:4c1ec7ffd84354c00487ca",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  storeLocaiton(location) {
    firebase
      .database()
      .ref("Locations/" + location.name)
      .set({
        name: location.name,
        description: location.description,
        latitudeGps: location.latitudeGps,
        longitudeGps: location.longitudeGps,
        type: location.type,
        distance: "100", //default
      });
  }

  parse = (locations) => {
    const {
      name,
      description,
      latitudeGps,
      longitudeGps,
      type,
      distance,
    } = locations.val();
    return { name, description, latitudeGps, longitudeGps, type, distance };
  };

  get = (callback) => {
    this.db
      .orderByChild("height")
      .on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  get db() {
    return firebase.database().ref("Locations");
  }

  off() {
    this.db.off();
  }
}

export default new Fire();
