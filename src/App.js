import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import Router from './Router'
import LoginForm from './components/LoginForm'
class App extends React.Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyAiWCIKvMeGAPjaLkZyHX9hQghIfKbEkFk',
      authDomain: 'managr-4bd0c.firebaseapp.com',
      databaseURL: 'https://managr-4bd0c.firebaseio.com',
      projectId: 'managr-4bd0c',
      storageBucket: 'managr-4bd0c.appspot.com',
      messagingSenderId: '371966919951'
    }
    firebase.initializeApp(config)
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App
