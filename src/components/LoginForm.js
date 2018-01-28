import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, Alert, View } from 'react-native';
import Spinner from './Spinner';
import Card from './Card';
import CardItem from './CardItem';
import Input from './Input';
import Button from './Button';
import Header from './Header';
//import TestAlert from './TestAlert';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onNewAccount.bind(this));
  }

  onNewAccount() {
    const { email, password } = this.state;

    Alert.alert(
    'No account found for email',
    'Would you like to create an account with this information?',
    [
      { text: 'Yes',
      onPress: () => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this));
} },
      { text: 'No', onPress: (this.onLoginFail.bind(this)) },
    ],
    { cancelable: false }
  );
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner spinnerSize="small" />;
    }

    return (
      <Button
        whenClicked={this.onButtonPress.bind(this)}
      >
        Log In
      </Button>
    );
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText="Log In" />
        <Card>
          <CardItem>
            <Input
              placeHolder="email"
              label="https://marketplace.canva.com/MAB7lEdfd4A/1/thumbnail/canva-person-silhouette-face-profile-man-guy-head-icon-vector-graphic-MAB7lEdfd4A.png"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{ height: 20, width: 100 }}
            />
          </CardItem>

          <CardItem>
            <Input
              secureTextEntry
              placeHolder="password"
              label="https://d30y9cdsu7xlg0.cloudfront.net/png/10982-200.png"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ height: 20, width: 100 }}
            />
          </CardItem>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardItem>
            {this.renderButton()}
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  titleStyle: {
    color: '#FFF',
    marginTop: 10,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  }
};

export default LoginForm;
