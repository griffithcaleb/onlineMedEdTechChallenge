import {StyleSheet} from 'react-native'
import { colors } from '../lib/colors'

export const editTodoStyles = StyleSheet.create({
    descriptionInput: {
        height: 50,
        marginHorizontal: 16,
        marginTop: 14,
        marginBottom: 5,
        borderWidth: 2,
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: colors.black
    },
    editHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    container: {
        height: '100%',
        width: '100%'
    },
    content: {
        paddingTop: 20,
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: colors.lightBlue,
        height: 50,
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 1.5,
            height: -1.5
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        borderWidth: 2,
        borderColor: colors.darkBlue
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    backArrow: {
        height: 45,
        width: 45,
        tintColor: colors.darkBlue
    },
    back: {
        padding: 5
    },
    errorText: {
        color: colors.red
    },
    errorContainer: {
        height: 15,
        marginBottom: 10
    },
    descriptionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    descriptionHeader: {
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 5,
        fontSize: 20
    },
  descriptionContentContainer: {
    width: '100%'
  },
  descriptorText: {
    textAlign: 'center'
  }
})