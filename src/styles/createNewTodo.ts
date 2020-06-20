import { StyleSheet } from 'react-native'
import { colors } from '../lib/colors'
export const createNewTodoStyles = StyleSheet.create({
    descriptionInput: {
        height: 50,
        marginHorizontal: 16,
        marginTop: 14,
        marginBottom: 5,
        borderWidth: 2,
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: colors.darkBlue
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
        borderColor: colors.darkBlue,
        borderWidth: 2
    },
    buttonText: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
    },
    backArrow: {
        height: 45,
        width: 55,
        tintColor: colors.darkBlue
    },
    back: {
        padding: 25
    },
    errorText: {
        color: colors.red,
    },
    errorContainer: {
        height: 15,
        marginBottom: 10
    },
    createStepHeader: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})