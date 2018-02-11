import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, Alert, View, Image, KeyboardAvoidingView, StatusBar } from 'react-native';
import Spinner from './Spinner';
import LogInButton from './LogInButton';
import Input from './Input';

class NewLoginForm extends Component {
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
    'No account found with that information',
    'Would you like to create an account with this information?',
    [
      { text: 'Yes',
      onPress: () => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onEmailUsed.bind(this));
} },
      { text: 'No', onPress: (this.onLoginFail.bind(this)) },
    ],
    { cancelable: false }
  );
  }

  onEmailUsed() {
    this.setState({
      error: 'Email Already Exists',
      loading: false,
    });
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
      <LogInButton
        whenClicked={this.onButtonPress.bind(this)}
        value={this.state.email}
      >
        LOGIN
      </LogInButton>
    );
  }
  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.logoContainerStyle}>
          <Image
            style={styles.logo}
            source={require('./Pictures/AppIcon.png')}
          />
          <Text style={styles.titleStyle}>BookMinder for Oak Way High School</Text>

        </View>

        <Input
          placeHolder="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          returnKeyType="next"
          keyboardType="email-address"
          //onSubmitEditing={() => this.passwordInput.focus()}
        />

        <Input
          placeHolder="password"
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          returnKeyType="go"
          //ref={(input) => this.passwordInput = input}
        />

        {this.renderButton()}
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#18dcff',
    paddingBottom: 20
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#3498DB'
  },
  logo: {
    width: 125,
    height: 125
  },
  logoContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#FFF',
    marginTop: 10,
    width: 180,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 18
  },
  titleStyle: {
    color: '#FFF',
    marginTop: 20,
    width: 240,
    textAlign: 'center',
    fontSize: 20
  }
};

export default NewLoginForm;
