import {StyleSheet} from 'react-native'

export const editTodoStyles = StyleSheet.create({
    descriptionInput: {
        height: 50,
        marginHorizontal: 16,
        marginTop: 14,
        marginBottom: 5,
        borderWidth: 1,
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingLeft: 10
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
        shadowRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    backArrow: {
        height: 45,
        width: 45,
        tintColor: 'rgb(79, 204, 222)'
    },
    back: {
        padding: 5
    },
    errorText: {
        color: 'red'
    },
    errorContainer: {
        height: 15,
        marginBottom: 10
    },
    descriptionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionHeader: {
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 5,
        fontSize: 20
    }
})