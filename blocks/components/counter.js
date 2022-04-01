// Example block of a button that increments a counter and stores the result on the card.

// These imports are defined in `packages.js` and are injected into the block from the app
// If you want to use a new package in your block, create a pull request and add it to packages.js
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements';

// These are the mocked apis to store data and get information about the owners of the card
import { getBlockData, setBlockData } from 'seam-data-layer';
import { getOwners } from 'seam-owners-api';

const Counter = () => {
    const [count, setCount] = useState(0)

    // getBlockData returns null the first time a block is used, so we need to check and then set to the default of zero
    getBlockData("count").then(existingCount => { existingCount == null ? setCount(0) : setCount(existingCount) })
    
    // Assuming for now that there are only 2 owners of the card
    // In the future, squad cards could have more owners
    const owners = getOwners()
    const user1 = owners[0]
    const user2 = owners[1]
    return (
        <Card>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                <Text>{user1.name + "'s and " + user2.name + "'s button."}</Text>
                <Button onPress={() => {setCount(count + 1); setBlockData("count", count + 1)}} title="Press Me!" />
                <Text>Pressed {count} times!</Text>
            </View>
        </Card>
    )
}

export default Counter

// Add custom styles here!
const styles = StyleSheet.create({})
