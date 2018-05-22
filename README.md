# camera-sketch

### Build & Run
* run `yarn` to install dependencies
* run 'react-native link` to link dependencies
* run `react-native run-ios` to run the app in the simulator

### Run on a real device
#### Option 1
* Run the app using Xcode and select connected device as a target
#### Option 2
* install global package `npm install -g ios-deploy`
* run `react-native run-ios --device [nameOfDevice]  --configuration release` for exmaple `react-native run-ios --device iPhone --configuration release`

### Note
Camera doesn't work in simulator and defaults to black background
