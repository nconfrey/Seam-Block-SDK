// Example block of a button that increments a counter and stores the result on the card.

// These imports are defined in `packages.js` and are injected into the block from the app
// If you want to use a new package in your block, create a pull request and add it to packages.js
import React, { useState } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Card, Text } from 'react-native-elements';
//import { ImagePicker } from 'expo-image-picker';
//import Constants from 'expo-constants';
//import { Permissions } from 'expo-permissions';

// These are the mocked apis to store data and get information about the owners of the card
import { getFile } from 'seam-data-layer';

const Locket = () => {
    const [photo, setPhoto] = useState("")
    getFile("sample1").then(existingPhoto => { existingPhoto == null ? setPhoto("") : setPhoto(existingPhoto) })

    // const getPermissionAsync = async () => {
    //     if (Constants.platform.ios) {
    //         const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         if (status !== "granted") {
    //             alert("Sorry, we need camera roll permissions to make this work!");
    //         }
    //     }
    // };

    // const pickImage = async () => {
    //     try {
    //         let result = await ImagePicker.launchCameraAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //             allowsEditing: true,
    //             aspect: [4, 3],
    //             quality: 1,
    //             allowsMultipleSelection: (false),

    //         });
    //         if (!result.cancelled) {
    //             setPhoto(result.uri);
    //         }
    //         console.log(result);
    //     } catch (E) {
    //         console.log(E);
    //     }
    // };

    return (
        <Card>
            <TouchableOpacity onPress={() => {pickImage()}}>
                <Image
                    source={{ uri: photo }}
                    style={{ width: 200, height: 200 }}
                />
            </TouchableOpacity>
        </Card>
    )
}

export default Locket

// Add custom styles here!
const styles = StyleSheet.create({})
