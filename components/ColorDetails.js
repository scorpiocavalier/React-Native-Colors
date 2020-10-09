import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ route }) => {
  const { color } = route.params
  return (
    <View style={ [ styles.container, { backgroundColor: color } ] }>
      <Text>Color Details: { color }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})