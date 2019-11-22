import React, {Component} from 'react';
import {Text, TextInput, Button, View, StyleSheet, ImageBackground, Alert} from 'react-native';
import t from 'tcomb-form-native';
import * as firebase from "firebase";

const Form = t.form.Form;

const User = t.struct({
    username: t.String,
    password: t.String,
});


class LoginPage extends Component {
    static navigationOptions = {
        title: 'Login',

    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = () => {
        const value = this._form.getValue(); // use to get the form value
        console.log('value: ', value.password);
        // if (value !== null){}
        firebase.auth().signInWithEmailAndPassword(this._form.getValue().username, this._form.getValue().password)
            .then(()=> {
                Alert.alert("Authenticated")

            }, (error) => {
                Alert.alert(error.message);
            })
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                {/*<ImageBackground source={require('../assets/background1.png')} style={{width: '100%', height: '80%'}}>*/}


                    <View style={styles.container}>

                        <Form type={User} ref={c => this._form = c}/>
                        <Button title="LOGIN" onPress={this.handleSubmit}/>


                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 18, padding: 5, margin: 5}}>Don't have an account?</Text>
                        <Button onPress={() => navigate('Signup')} title="Signup" style={{fontSize: 18, padding: 5}}/>
                    </View>

                {/*</ImageBackground>*/}

            </View>
        );
    }
}

const formStyles = {
    ...Form.stylesheet,

};

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },

});


export default LoginPage;
