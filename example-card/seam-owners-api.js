/*

A block lives in a card that has an array of owners.
This API allows blocks to request information about the owners of the card which host the block.

This API is obviously mocked, but when your block is hosted inside the Seam app, calls to this function will return production data.

*/

// Feel free to customize these to your own names :)
// Don't add extra keys though, those won't be fetchable in production.
const user1 = {name: "Nick", pictureURL: ""}
const user2 = {name: "Katy", pictureURL: ""}

export function getOwners() {
    return [user1, user2]
}

// This is the user that is currently looking at the block
export function getCurrentOwner() {
    return user1
}