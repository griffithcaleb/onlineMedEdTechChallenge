import {StyleSheet} from 'react-native'
import { colors } from '../lib/colors'

export const headerStyles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.lightBlue,
    position: 'sticky' as any,
    top: 0,
    zIndex: 99,
    borderBottomColor: colors.black,
    borderBottomWidth: 5
  },
  titleStyle: {
    alignSelf: 'flex-start',
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  }
})