import React from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { connect } from 'react-redux'

class LoginForm extends React.Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }
  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }
  onButtonPress = () => {
    this.props.loginUser({email: this.props.email, password: this.props.password})
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size='large'/>
    }
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeHolder="user@example.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeHolder="password"
            onChangeText={this.onPasswordChange}
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser })(LoginForm)
