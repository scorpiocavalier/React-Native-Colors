import AsyncStorage from '@react-native-community/async-storage'
import { useEffect, useState } from 'react'
import { generate } from 'shortid'

export default () => {
  const [ colors, setColors ] = useState([])

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem('@ColorListStore:Colors')
    if (colorData) {
      const colors = JSON.parse(colorData)
      setColors(colors)
    }
  }

  // Load colors
  useEffect(() => {
    if (colors.length) return
    loadColors()
  }, [])

  // Save colors
  useEffect(() => {
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }, [ colors ])

  const addColor = (color) => {
    const newColor = { id: generate(), color }
    setColors([ ...colors, newColor ])
  }

  return { colors, addColor }
}