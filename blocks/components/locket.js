// Example block of a button that increments a counter and stores the result on the card.

// These imports are defined in `packages.js` and are injected into the block from the app
// If you want to use a new package in your block, create a pull request and add it to packages.js
import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Card, Text } from 'react-native-elements';

// These are the mocked apis to store data and get information about the owners of the card
import { getFile } from 'seam-data-layer';

const Locket = () => {
    const [photo, setPhoto] = useState("")
    getFile("sample1").then(existingPhoto => { existingPhoto == null ? setPhoto("") : setPhoto(existingPhoto) })
    return (
        <Card>
            <Image
                source={{ uri: photo }}
            />
        </Card>
    )
}

export default Locket

// Add custom styles here!
const styles = StyleSheet.create({})
