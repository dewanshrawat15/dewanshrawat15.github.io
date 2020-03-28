import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)
firebase.initializeApp({
    databaseURL: "https://portfolio-0011.firebaseio.com",
    projectId: "portfolio-0011",
})
export const db = firebase.firestore()