import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBdaoHd6Z-IAyLPNiRBbfTNdSmKdW-UTPc",
  authDomain: "slackbot-time-1478365033293.firebaseapp.com",
  databaseURL: "https://slackbot-time-1478365033293.firebaseio.com",
  projectId: "slackbot-time-1478365033293",
  storageBucket: "slackbot-time-1478365033293.appspot.com",
  messagingSenderId: "703350577206",
  appId: "1:703350577206:web:b922f7d821fb0ba14b2097",
  measurementId: "G-K62DZSHK97"
};

firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
