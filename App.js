import React from 'react';
import {createStore, combineReducers} from "redux";
import {Provider} from 'react-redux';

import ReduxThunk from 'redux-thunk';
import ApiKeys from "./src/constants/ApiKeys";
import selfieReducer from "./src/store/reducers/selfie";
import sleepReducer from "./src/store/reducers/sleep";
import AppNavigator from './src/navigation/faces.navigation'

import MainNavigator from './src/navigation/faces.navigation';
import * as firebase from "firebase";
// import {init} from './src/helpers/db';
// init();
//
// init().then(() => {
//         console.log('Initialized Database');
//     }).catch((err) => {
//         console.log("Initializing Database Failed");
//         console.log(err)
//     });

const rootReducer = combineReducers({
    sleep: sleepReducer,
    selfie: selfieReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/open-sans/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/open-sans/OpenSans-Bold.ttf')
    });
};


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        // initializing firebase ..

        if (!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}


    }


    render() {
        return (
            <Provider store={store}><AppNavigator/></Provider>
        );
    };
};
