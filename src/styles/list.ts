import { StyleSheet } from 'react-native'

export const listStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listHeader: {
        padding: 10,
        backgroundColor: 'rgb(0, 45, 55)',
        display: 'flex',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        shadowOffset: {
            width: 1.5,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    headerText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 22,
    },
    listItem: {
        padding: 15,
        borderColor: 'rgb(0, 45, 55)',
        borderRadius: 5,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 15,
        alignItems: 'center',
        shadowOffset: {
            width: 1.5,
            height: -1.5
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    delete: {
        height: 25,
        width: 25,
        tintColor: 'red',
        backgroundColor: 'white'
    },
    emptyCircle: {
        height: 35,
        width: 35,
        tintColor: 'rgb(0, 45, 55)',
    },
    circleContainer: {
    },
    deleteContainer: {
        marginRight: 'auto',
        position: 'absolute',
        top: -13,
        right: -13
    },
    nameText: {
        fontSize: 22
    }
})
