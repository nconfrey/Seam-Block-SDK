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
1. Clone this repo
2. Run `npm install` from root
Developing:
Run the example card:
```
$ cd example-card
$ expo start
```
Learn more about expo to see how to run the example card on iOS, Android, or Web.

Run the block server:
```
$ cd example-card
$ expo start
```
See the block file hierarchy at http://127.0.0.1:8080/

Edit the existing example blocks in the `blocks` directory. Unfortunately it sucks right now and you'll have to `npm run build` after each change.

Using React Native also allows the app to run on iOS, Android and Web out of the box, rather than having different code injection strategies per platform.

### Architecture
[work in progress]
There are two major pieces to making Blocks work: The Block Server, and the App. Block code is fetched from the server, and built and hosted as react native components. This means that the Seam app doesn't need to bundle any of the Blocks locally, and can always fetch the latest Blocks from the server (without app updates). 

To simulate this locally in this dev enviroment, there is a Block Server (hosted by `http-server`) so that the example card can pull from this remote server and simulate the dependency injection. The example card will fetch components on-demand from the block server, and then render them in the existing react native app.

### Licenses and Thanks
Much of the initial architecture is thanks to (Sarath's blog article "Lazy loading React Native components from a server.")[https://sarathkcm.dev/blog/lazy-loading-react-native-components-from-a-server]