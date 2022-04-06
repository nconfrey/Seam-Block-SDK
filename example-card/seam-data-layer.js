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

// Takes in an image file and uploads it to the database
export async function putFile(name, file) {
    // In production, this will upload to the filestore
    console.log("Putting file at: " + name)
}

// Returns the download url of an image at the name. If it doesn't exist, returns null
export async function getFile(name) {
    // In production, this will fetch from the filestore.
    const exampleImages = {"sample1": "https://pbs.twimg.com/profile_images/1498743622581121026/JatkpfN4_400x400.jpg",
                           "sample2": "" // add your example images here!
                        }
    return exampleImages[name]
}