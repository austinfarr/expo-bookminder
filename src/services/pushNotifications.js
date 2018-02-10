import {Permissions, Notifications} from 'expo';
import {AsyncStorage} from 'react-native';
import firebase from 'firebase';

export default async (email) => {
    const previousToken = await AsyncStorage.getItem('pushtoken');

    if (previousToken) {
        console.log(`Previous token: ${previousToken}`);
        return;
    }

    if (email.length === 0) {
        console.log('No email address!');
        return;
    }

    const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

    if (status !== 'granted') { return; }

    const token = await Notifications.getExpoPushTokenAsync();

    const userId = email.replace(/\W+/g, '_');

    console.log(`saving ${token} to ${userId}`);
    firebase.database().ref().child('users').child(userId)
        .set(token)
        .then(() => {
            console.log(`${token} saved to ${email}`);
        })
        .catch((e) => {
            console.log(`Error saving ${token} to ${userId}: ${e}`);
        });

    AsyncStorage.setItem('pushtoken', token);

    console.log(`Token: ${token}`);
};
