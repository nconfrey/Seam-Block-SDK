// Example block of a header for a card

// These imports are defined in `packages.js` and are injected into the block from the app
// If you want to use a new package in your block, create a pull request and add it to packages.js
import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button, Card, Text } from 'react-native-elements';

// These are the mocked apis to store data and get information about the owners of the card
import { getBlockData, setBlockData } from 'seam-data-layer';
import { getOwners } from 'seam-owners-api';

const HeaderBlock = () => {
    // Assuming for now that there are only 2 owners of the card
    // In the future, squad cards could have more owners
    const owners = getOwners()
    const user1 = owners[0]
    const user2 = owners[1]
    return (
        <Card>
            <View style={styles.headerContainer}>
                <View style={styles.userRow}>
                    <View style={styles.profilePicturesRow}>
                        <Image
                            style={styles.userImage}
                            source={{ uri: user1.pictureURL }}
                        />
                        <Image
                            style={styles.userImage}
                            source={{ uri: user2.pictureURL }}
                        />
                    </View>
                    <View style={styles.userNameRow}>
                        <Text style={styles.userNameText}>{user1.name + " and " + user2.name}</Text>
                    </View>
                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>{"Here's the rest of your blocks"}</Text>
                    </View>
                </View>
            </View>
        </Card>
    )
}

export default HeaderBlock

// Add custom styles here!
const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        marginTop: 45,
    },
    userBioRow: {
        marginLeft: 40,
        marginRight: 40,
    },
    userBioText: {
        color: 'gray',
        fontSize: 13.5,
        textAlign: 'center',
    },
    userImage: {
        borderRadius: 60,
        height: 120,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        width: 120,
    },
    userNameRow: {
        marginBottom: 10,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
    },
    profilePicturesRow: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 12,
    },
});
