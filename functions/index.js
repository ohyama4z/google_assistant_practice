'use strict'

const functions = require('firebase-functions')
const {dialogflow} = require('actions-on-google')

const app =dialogflow()

app.intent('HelloWorld', (conv) => {
    conv.close('ハローワールドぺこ！')
})

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)
