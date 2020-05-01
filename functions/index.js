'use strict'

const functions = require('firebase-functions')
const {dialogflow} = require('actions-on-google')
require('date-utils')

const app =dialogflow()

//各intentへの入力はconv.body.queryResult.queryTextで取得できる

app.intent('Default Welcome Intent', conv => {
    let date = new Date()
    let dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()] + '曜日'
    let today = date.toFormat('YYYY年M月D日')

    conv.ask(`こんぺこ～\n今日は${today}、${dayOfWeek}ぺこよ！`)
})

app.intent('HelloWorld', conv => {
    console.log(conv.body.queryResult.queryText)
    conv.ask('ハローワールドぺこ！')
})

app.intent('Peco', conv => {
    const tell = conv.body.queryResult.queryText + 'ぺこ！'
    conv.ask(tell)
})

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)
