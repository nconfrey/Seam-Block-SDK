/*

A block lives in a card
This API allows blocks to store and retrieve data specific to the card that it is hosted in.

This API is mocked to use local browser storage, but when your block is hosted inside the Seam app, calls to these functions will return production data.

*/

// Stores the data in 'value' at the specified key. Will overrite existing, if it exists.
export function setBlockData(key, value) {
    console.log("setting data at " + key + " " + value)
}

// Retrieve the data stored at 'key'. If it doesn't exist, returns nil.
export function getBlockData(key) {
    console.log("getting at key: " + key)
    return 10
}