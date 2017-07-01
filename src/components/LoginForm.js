import React from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
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

  render () {
    console.log(this.props)
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
          />
        </CardSection>
        <Button onPress={this.onButtonPress}>
          Login
        </Button>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.props
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser })(LoginForm)
