const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require("firebase-admin/firestore")

const serviceAccount = require('./rentease-115a6-firebase-creds.json')

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore()

module.exports = { db }
