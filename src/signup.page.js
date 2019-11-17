import React, {Component} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Button} from "react-native";
import {Ionicons} from '@expo/vector-icons';

class SignupPage extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null,

    };

    render() {
        const {navigate} = this.props.navigation;
        return (

            <ImageBackground source={require('../assets/background1.png')} style={{width: '100%', height: '80%'}}>
                <TouchableOpacity>
                    <View style={style.headerWrap}>
                        <Ionicons name='md-contact' size={70} color='#8f12fe'></Ionicons>
                    </View>
                </TouchableOpacity>

                <View style={style.title}>
                    <Text style={{fontSize: 40}}>SIGNUP</Text>
                </View>


                <TextInput style={style.input} placeholder="Name"/>
                <TextInput style={style.input} placeholder="Email"/>
                <TextInput style={style.input} placeholder="Password"/>
                <TextInput style={style.input} placeholder="Confirm"/>
                <TouchableOpacity style={style.button}
                >
                    <Text style={style.buttonLabel}>Create account</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row', justifyContent: 'center'}}>
                    <Text style={{fontSize:18, padding:5, margin:5}}>Already onboard?</Text>
                    <Button onPress = {()=> navigate('Login')} title="Login" style={{fontSize:18, padding:5}}/>
                </View>
            </ImageBackground>

        )
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        padding: 10,
        margin: 20,
    },
    button: {
        backgroundColor: '#8f12fe',
        width: 360,
        height: 54,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    buttonLabel: {
        color: 'white'
    },
    title: {
        alignItems: 'center',
        padding: 20
    },
    newprofilepic: {

        // alignSelf: 'stretch',
        width: 70,
        borderRadius: 30,
        margin: 10,

    },
    headerWrap: {
        alignItems: 'center',
        margin: 40
    }
});
export default SignupPage;
