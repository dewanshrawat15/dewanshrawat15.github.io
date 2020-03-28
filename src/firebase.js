import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)
firebase.initializeApp({
    databaseURL: "https://folio-web-dscbvppune.firebaseio.com",
    projectId: "folio-web-dscbvppune",
})
export const db = firebase.firestore()