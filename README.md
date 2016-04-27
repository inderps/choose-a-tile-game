## Choose A Tile Game

DEMO: http://inderps.github.io/choose-a-tile-game/

This is a sample demo game built using react and redux. 

### Development
* Run `npm install`
* Run `npm start`
* Go to `localhost:3000` to see the app
* Any changes to `src`  folder will automatically rebuild to `build` folder

### Production Deployment
* Run `npm run build`

### Testing
* Run `npm run test`

### Directory
* **build/**: All the compiled code + index.html + tiles images
* **config/**: Webpack configs
* **src/**: All your app code
* **test/**: All your specs for the app code

### Game Data Assumptions
* The game has been divided into set of rounds
* Each round has set of rows
* Each row contains set of images.
* The sum of width of all images is same for all rows in a single round
* the height of all images in a single row is same
