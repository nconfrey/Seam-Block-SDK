/*

A block lives in a card
This API allows blocks to store and retrieve data specific to the card that it is hosted in.

This API is mocked to use local browser storage, but when your block is hosted inside the Seam app, calls to these functions will return production data.

*/
import AsyncStorage from '@react-native-async-storage/async-storage';

// Stores the data in 'value' at the specified key. Will overrite existing, if it exists.
export async function setBlockData(key, value) {
    console.log("setting data at " + key + " " + value)
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

// Retrieve the data stored at 'key'. If it doesn't exist, returns null.
export async function getBlockData(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}