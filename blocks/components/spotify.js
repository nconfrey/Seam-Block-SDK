// Example block of a button that increments a counter and stores the result on the card.

// These imports are defined in `packages.js` and are injected into the block from the app
// If you want to use a new package in your block, create a pull request and add it to packages.js
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';

// These are the mocked apis to store data and get information about the owners of the card
import { getFile } from 'seam-data-layer';

const Spotify = () => {
    return (
        <Card>
            <iframe style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/5p2KcgWEVmDh1ULtjJ8fri?utm_source=generator" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </Card>
    )
}

export default Spotify

// Add custom styles here!
const styles = StyleSheet.create({})

