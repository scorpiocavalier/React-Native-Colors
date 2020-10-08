import React, { useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native'

export default ({ onAdd }) => {
  const [ inputValue, setInputValue ] = useState('')
  const input = useRef()

  return (
    <View style={ styles.container }>
      <TextInput
        ref={input}
        style={ styles.txtInput }
        value={ inputValue }
        onChangeText={ setInputValue }
        placeholder='Enter a color name'
        autoCapitalize='none'
      />
      <Button
        title='add'
        onPress={ () => {
          input.current.blur()
          onAdd(inputValue)
          setInputValue('')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    fontSize: 20,
  }
})