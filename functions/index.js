const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Expo = require('expo-server-sdk');
const serviceAccount = require('./serviceAccount.json');

let expo = new Expo();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fbla-bookminder.firebaseio.com"
});

exports.onBookChange = functions.database.ref('/library/{isbn}')
  .onWrite(event => {
    if (event.data.previous.exists()) {
      const current = event.data.val();
      const previous = event.data.previous.val();

      if(current.checkedOutBy !== previous.checkedOutBy
        && current.reservedBy !== ''
        && current.checkedOutBy === '') {
          const userId = current.reservedBy.replace(/\W+/g, '_');
          const ref = admin.database().ref(`users/${userId}`);
          ref.on('value', snapshot => {
            ref.off();
            const token = snapshot.val();
            expo.sendPushNotificationAsync({
              to: token,
              sound: 'default',
              body: `${current.title} is now available!`,
              data: { available: current.title },})
              .then( () => {return 0;})
              .catch((err) => {console.log(err); return 1;});
            });
      }
    }
      return 0;
    });
