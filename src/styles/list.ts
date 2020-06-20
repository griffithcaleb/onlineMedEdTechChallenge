import { StyleSheet } from 'react-native'
import { colors } from '../lib/colors'

export const listStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listHeader: {
        padding: 10,
        backgroundColor: colors.darkBlue,
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
        color: colors.white,
        alignSelf: 'center',
        fontSize: 22,
    },
    listItem: {
        padding: 15,
        borderColor: colors.darkBlue,
        borderRadius: 5,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        shadowOffset: {
            width: 1.5,
            height: -1.5
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    delete: {
        height: 15,
        width: 15,
        backgroundColor: 'transparent',
        tintColor: colors.red
    },
    emptyCircle: {
        height: 35,
        width: 35,
        tintColor: colors.darkBlue,
    },
    circleContainer: {
      marginRight: 'auto'
    },
    deleteContainer: {
        marginRight: 'auto',
        position: 'absolute',
        top: -5,
        right: -8
    },
    nameText: {
        fontSize: 15
    }
})
