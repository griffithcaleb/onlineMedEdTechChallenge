import { StyleSheet } from 'react-native'
export const createNewTodoStyles = StyleSheet.create({
    descriptionInput: {
        height: 50,
        marginHorizontal: 16,
        marginTop: 14,
        marginBottom: 5,
        borderWidth: 1,
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 5
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
        backgroundColor: 'rgb(79, 204, 222)',
        height: 50,
        width: 100,
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

    },
    buttonText: {
        color: 'white',
        fontSize: 22,
    },
    backArrow: {
        height: 45,
        width: 55
    },
    back: {
        padding: 25
    },
    errorText: {
        color: 'red',
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