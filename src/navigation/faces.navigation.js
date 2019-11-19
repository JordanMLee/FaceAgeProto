import { createStackNavigator} from "react-navigation-stack";
import CameraPage from '../camera.page';
import HomeScreen from "../home.page";
import ProfilePage from "../profile.page"
import LoginPage from "../login.page";
import SignupPage from "../signup.page";
import SleepPage from "../sleep.page";

import {createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Camera: CameraPage,
    Profile: ProfilePage,
    Login: LoginPage,
    Signup: SignupPage,
    Sleep: SleepPage,

});
export default createAppContainer(AppNavigator);
