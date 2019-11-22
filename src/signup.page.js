import React, {Component} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Button, Alert} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import * as firebase from 'firebase';

class SignupPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            name :"",
            email: "",
            password: "",
            passwordConfirm: "",
        }
    }

    static navigationOptions = {
        header: null,

    };

    onSignupPress = () => {


        if (this.state.password !== this.state.passwordConfirm ) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                Alert.alert("New user created")


            }, (error) => {
                Alert.alert(error.message);

            });
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


                <TextInput style={style.input}
                           placeholder="Name"
                           value={this.state.name}
                           onChangeText={(text) => { this.setState({name: text})}}
                />

                <TextInput style={style.input}
                           placeholder="Email"
                           value={this.state.email}
                           onChangeText={(text) => { this.setState({email: text})}}
                />

                <TextInput style={style.input}
                           placeholder="Password"
                           value ={this.state.password}
                           onChangeText={(text) => { this.setState({password: text})}}
                />

                <TextInput style={style.input}
                           placeholder="Confirm"
                           value={this.state.passwordConfirm}
                           onChangeText={(text) => { this.setState({passwordConfirm: text})}}
                />

                <TouchableOpacity style={style.button}
                                  onPress={ () => {this.onSignupPress()}}
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
