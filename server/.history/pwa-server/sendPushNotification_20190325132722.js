const webpush = require('web-push');
const config = require('./config/browserConfig');

const VapidKeys = {
    publicKey: config.publicKey,
    privateKey: config.privateKey
}

webpush.setVapidDetails(
    'mailto:web-push-book@gauntface.com',
    VapidKeys.publicKey,
    VapidKeys.privateKey
);

async function IdeaNotification(subscriptions, data) {
        const option = {
            endpoint: "https://fcm.googleapis.com/fcm/send/cFS4fjgTIWU:APA91bHhwGDgHZiivqfvCq5Fs-CJwqOTpQoKe_pLTffIETk7Vbnii6P5gj5wI0IJzs0U0teBlsGkYgtecp3GB2A5ekPLqhToig41JOfukdSkMyREydt2RiNw5w8q-7UPjSShGNLQtncF",
            keys: {
                p256dh:"",
                auth: ""
            }
        };
        const notificationPayload = {
            "notification": {
                "title":"hello",
                "body": "i am kranthi",
                //"icon": "../src/assets/images/logo.png",
                "data": {
                    //url:data.click_action,
                    "dateOfArrival": Date.now(),
                    "primaryKey": 1
                },
                "actions": [{
                    "action": "open_url",
                    "title": "Go to the site",
                    //"openUrl": "http://127.0.0.1:6245/idea"
                }]
            }
        };
        resultwebPush = await webpush.sendNotification(option, JSON.stringify(notificationPayload));
        return resultwebPush;
}



module.exports = {
    IdeaNotification
}