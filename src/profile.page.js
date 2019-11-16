import React , {Component} from 'react';
import {Text} from 'react-native';

import {USER} from "./data/dummy-data";

class ProfilePage extends Component {

    static navigationOptions = {
        title: 'Profile',

    };
    render() {
        return (
            <Text>{USER.name}</Text>
        );
    }
}

export default ProfilePage;
