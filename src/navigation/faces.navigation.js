import { createStackNavigator} from "react-navigation-stack";
import CameraPage from '../camera.page';
import HomeScreen from "../home.page";

import {createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Camera: CameraPage,
    // Home: HomeScreen,
});
export default createAppContainer(AppNavigator);
