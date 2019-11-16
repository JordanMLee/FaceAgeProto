import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {withNavigation} from 'react-navigation';

class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.header}>

                <TouchableOpacity onPress={() => {
                    navigate('Profile')

                }}>
                    <View style={styles.profileWrap}>
                        <Image style={styles.profilepic} source={require('../img/selfie.jpg')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View>
                        <Text styles={styles.name}>Jordan Lee</Text>
                    </View>
                </TouchableOpacity>


            </View>

        )

    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row'
        // alignItems: 'flex-start'

    },
    profileWrap: {
        flex: 1,

        // justifyContent:'flex-start'
    },
    profilepic: {
        flex: 1,
        // alignSelf: 'stretch',
        width: 70,
        borderRadius: 30,
        margin: 10,

    },
    name: {
        margin: 10

    },
    pos: {},
});

export default withNavigation(ProfileHeader);
