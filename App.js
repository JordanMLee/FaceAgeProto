import React from 'react';
import CoreMLImage from "react-native-core-ml-image"

import CameraPage from './src/camera.page';
import AppNavigator from './src/navigation/faces.navigation'

const fetchFonts = () => {
  return Font.loadAsync({
      'open-sans': require('./assets/open-sans/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/open-sans/OpenSans-Bold.ttf')
  });
};


export default class App extends React.Component {
     render() {
        return (
            <AppNavigator/>
            // <CameraPage />
        );
    };
};
