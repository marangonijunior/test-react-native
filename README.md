# marangonijunior
## REACT NATIVE + EXPO + DETOX + AXIOS

This is a prototype to create a app using React Native, Expo and Detox to test
All configuration is done to start a blanck project.

## Features

- Get location requesting the permission to access GPS
- Access information from device
- Access API openweathermap to get the weather
- Unit test to test the screen and location functionality

## Tech

This prototype uses a number of open source projects to work properly:

- [React Native] - React Native is an open-source mobile application framework created by Facebook!
- [Typescript] - TypeScript is a programming language developed and maintained by Microsoft
- [Expo] - Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [Detox] - Gray box end-to-end testing and automation library for mobile apps.
- [Jest] - Jest is a JavaScript testing framework maintained by Facebook
- [Axios] - Promise based HTTP client for the browser and node.js
- [OpenWeatherMap] - OpenWeatherMap is an online service, owned by OpenWeather Ltd, that provides global weather data via API

And of course this repository itself is open source with a public repository on GitHub.

## Installation

Requires [Node.js](https://nodejs.org/) to run.
Requires use a MacOS system to run the ios project.



Install dependencies, devDependencies and run the project on iOS simulator 

```sh
yarn install 
yarn ios
```

**WARNING** You should change the binaryPath on the file .detoxrc.json after the first build to be possible Detox open the app to test.

```sh
binaryPath: /Users/[YOUR USER]/Library/Developer/Xcode/DerivedData/[PATH APP SIMULATOR]/Build/Products/Debug-iphonesimulator/testreactnative.app"
```

For test with detox, run the project on iOS simulator and let the METRO terminal opened

```sh
yarn test
```
**A test will purposely fail, when opening the application it is necessary to allow or not the use of the GPS*



## License

MIT
