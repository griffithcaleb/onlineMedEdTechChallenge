import { StyleSheet } from 'react-native';
import { colors } from '../lib/colors';

export const footerStyles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.darkBlue,
    position: 'sticky' as any,
    bottom: 0,
    zIndex: 99,
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 5,
    shadowOffset: {
      width: -1.5,
      height: -2.5
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  titleStyle: {
    marginLeft: 'auto',
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  }
})