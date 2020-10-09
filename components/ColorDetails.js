import Color from 'color'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ route }) => {
  const { colorName } = route.params
  const color = Color(colorName)
  const textColor = { fontSize: 30, color: color.negate().toString() }

  return (
    <View style={ [ styles.container, { backgroundColor: colorName } ] }>
      <Text style={ textColor }>{ colorName }</Text>
      <Text style={ textColor }>{ color.rgb().toString() }</Text>
      <Text style={ textColor }>{ color.hsl().toString() }</Text>
      <Text style={ textColor }>{ color.luminosity() }</Text>
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