import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements';
import { getBlockData, setBlockData } from 'seam-data-layer';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <Card>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                <Button onPress={() => {setCount(count + 1); setBlockData(count)}} title="Press Me!" />
                <Text>Pressed {count} times!</Text>
            </View>
        </Card>
    )
}

export default Counter

const styles = StyleSheet.create({})
