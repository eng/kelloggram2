const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDKx39B07UGPUMhfbNfhO-7aQyen_PgsuI",
  authDomain: "kiei-451-winter-2021.firebaseapp.com",
  projectId: "kiei-451-winter-2021",
  storageBucket: "kiei-451-winter-2021.appspot.com",
  messagingSenderId: "751368185998",
  appId: "1:751368185998:web:437cc4e490fd432789c1df"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase