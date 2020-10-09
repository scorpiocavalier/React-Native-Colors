import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ColorDetails from './components/ColorDetails'
import ColorList from './components/ColorList'

export default () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Home'
          options={ { title: 'Color List' } }
          component={ ColorList }
        />
        <Screen name='Details' component={ ColorDetails } />
      </Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
})
