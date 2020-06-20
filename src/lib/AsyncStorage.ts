import AsyncStorage from '@react-native-community/async-storage';


export const storeData = async (value: any) => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        //clear error
    }
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('todos', jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('todos')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
