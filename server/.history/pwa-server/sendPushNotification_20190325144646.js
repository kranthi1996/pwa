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

async function IdeaNotification() {
        const option = {
            endpoint: "https://fcm.googleapis.com/fcm/send/ef0bpjbzvFs:APA91bHd-R4LuPdf2cYD_CjwssLWtXtuCCRAYBdW-Q4dVKKmeaQKKUNytazGH9UtkL-5u7mPFzx353QHgS2NY8wgbzJ3anqE6Hva225R-jQkKCPl3gCjB1jbphIu65wDxRBswBKOMh62",
            keys: {
                p256dh:,
                auth: "xlNblw8rtFr75rNmwPmJUQ"
            }
        };
        const notificationPayload = {
            "notification": {
                "title":"hello",
                "body": "i am kranthi",
                "icon": "/home/kranthi/Angular/pwa-notifications/src/assets/icons/icon-72x72.png",
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