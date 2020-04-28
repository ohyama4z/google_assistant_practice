'use strict'

const functions = require('firebase-functions')
const {dialogflow} = require('actions-on-google')
require('date-utils')

const app =dialogflow()

app.intent('Default Welcome Intent', (conv) => {
    conv.contexts.set('welcome', 0)
    conv.contexts.set('helloworld', 3)

    let date = new Date()
    let dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()] + '曜日'
    let today = date.toFormat('YYYY年M月D日')

    conv.ask(`ハローワールド!\n今日は${today}、${dayOfWeek}です!`)
})

app.intent('HelloWorld', (conv) => {
    conv.close('ハローワールドぺこ！')
})

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)
