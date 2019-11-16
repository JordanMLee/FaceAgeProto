import { createStackNavigator} from "react-navigation-stack";
import CameraPage from '../camera.page';
import HomeScreen from "../home.page";
import ProfilePage from "../profile.page"

import {createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Camera: CameraPage,
    // Home: HomeScreen,
    Profile: ProfilePage,
});
export default createAppContainer(AppNavigator);
