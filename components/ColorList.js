import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ColorButton from './ColorButton'
import ColorForm from './ColorForm'
import useColors from '../hooks/useColors'

export default ({ navigation }) => {
  const { colors, addColor } = useColors()

  const renderItem = ({ item }) => (
    <ColorButton
      key={ item.id }
      backgroundColor={ item.color }
      onPress={ () => navigation.navigate('Details', { colorName: item.color }) }
    />
  )

  return (
    <>
      <ColorForm onAdd={ addColor } />
      <FlatList
        style={ [ styles.container ] }
        data={ colors }
        renderItem={ renderItem }
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
})
