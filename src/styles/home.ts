import {StyleSheet, Dimensions} from 'react-native'
import { colors } from '../lib/colors'

const { height, width } = Dimensions.get('screen')

export const homeStyles = StyleSheet.create({

  container: {
    height,
    width,
    alignContent: 'center',
  },
  continueButton: {
    backgroundColor: colors.lightBlue,
    height: 50,
    width: 200,
    padding: 30,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    shadowOffset: {
      width: 1.5,
      height: -1.5
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderColor: colors.darkBlue,
    borderWidth: 2
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
