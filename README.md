# Seam-Block-SDK
### 🚧 NOTE: This SDK is in active development 🚧
Development tools to create blocks for the Seam social platform.

### What is Seam?
Seam is the first community developed social network and social layer for web3. See more at [seam.contact](www.seam.contact).

# Developing Blocks
This repo will contain everything you need to make your first block that will run on Seam. Under the hood, blocks are just React components.

1. Download this repo and run to get an example card and example block
2. Create your new block!
3. [coming soon] Upload your `block.js` to the block marketplace
4. [coming soon] Login to the dev portal 

### Quick Start
[work in progress]
1. Clone/download this repo
2. Run `npm install` from root

### Developing:
Run the block server:
```
$ cd blocks
$ npm run build
$ npm start
```

`npm run build` builds the components, and makes sure the output is in the `dist` folder.

See the block file hierarchy at http://127.0.0.1:8080/.

Run the example card:
```
$ cd example-card
$ expo start
```
Learn more about expo to see how to run the example card on iOS, Android, or Web.

I suggest looking at the `blocks/counter.js` for the most basic block as a template. As an example with more css styles and images, try `header.js`.

You can create a new block just by creating a new js file in the `blocks` directory. Once you make a change, `npm run build` to rebuild the blocks onto the server. You can also `npm run watch` in a separate terminal window to automatically rebuild when you save your new block.

Using React Native also allows the app to run on iOS, Android and Web out of the box, rather than having different code injection strategies per platform.

### Debugging

This section describes some common errors when creating new blocks.
- Open Chrome Developer Tools Javascript Console (View->Developer->Javascript Console) to see the errors
- Make sure that the blocks built with your latest changes! The building console will spit out errors if the block won't compile.

### Architecture
[work in progress]
There are two major pieces to making Blocks work: The Block Server, and the App. Block code is fetched from the server, and built and hosted as react native components. This means that the Seam app doesn't need to bundle any of the Blocks locally, and can always fetch the latest Blocks from the server (without app updates). 

To simulate this in the SDK, there is a Block Server (hosted by `http-server`) so that the example card can pull from this remote server and simulate the dependency injection. The example card will fetch components on-demand from the block server, and then render them in the existing react native app.

### Licenses and Thanks
Much of the initial architecture is thanks to (Sarath's blog article "Lazy loading React Native components from a server.")[https://sarathkcm.dev/blog/lazy-loading-react-native-components-from-a-server]