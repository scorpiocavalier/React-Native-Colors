import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'
import useColors from './hooks/useColors'

export default function App () {
  const [ backgroundColor, setBackgroundColor ] = useState('green')
  const { colors, addColor } = useColors()

  const renderItem = ({ item }) => (
    <ColorButton
      key={ item.id }
      backgroundColor={ item.color }
      onPress={ setBackgroundColor }
    />
  )

  return (
    <>
      <ColorForm onAdd={ addColor } />
      <FlatList
        style={ [ styles.container, { backgroundColor } ] }
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
