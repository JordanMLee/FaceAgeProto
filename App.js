import React from 'react';
import CoreMLImage from "react-native-core-ml-image"

import CameraPage from './src/camera.page';
import AppNavigator from './src/navigation/faces.navigation'


export default class App extends React.Component {
    render() {
        return (
            <AppNavigator/>
            // <CameraPage />
        );
    };
};
