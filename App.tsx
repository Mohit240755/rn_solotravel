import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import RootNavigator from './app/navigation/RootNavigator'
import { Provider } from 'react-redux'
import Store from './app/ReduxToolkit/Store'

const App = () => {
  return (
   <Provider store={Store}>
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
</Provider>

  )
}

export default App;

