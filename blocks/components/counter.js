import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements';
import { getBlockData, setBlockData } from 'seam-data-layer';
import { getOwners } from 'seam-owners-api';

const Counter = () => {
    const [count, setCount] = useState(0)
    const owners = getOwners()
    const user1 = owners[0]
    const user2 = owners[1]
    return (
        <Card>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                <Text>{user1.name + "'s and " + user2.name + "'s button."}</Text>
                <Button onPress={() => {setCount(count + 1); setBlockData(count)}} title="Press Me!" />
                <Text>Pressed {count} times!</Text>
            </View>
        </Card>
    )
}

export default Counter

const styles = StyleSheet.create({})
