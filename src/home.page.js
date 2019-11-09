import React from 'react';
import {Button, View} from "react-native";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Jordan',

    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Camera"
                onPress={() => navigate('Camera')}
            />
        )
    }
}
export default HomeScreen;
