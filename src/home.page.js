import React from 'react';
import ProfileHeader from "./subcomponents/ProfileHeader";
import Colors from "./constants/Colors";
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {HeaderButton} from "react-navigation-header-buttons";
import CustomHeaderButton from "./subcomponents/HeaderButton";
import BezierLineChart from "./subcomponents/BezierLineChart";

import {
    Button,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
    TextInput,
} from "react-native";
import {HEALTHMETRICS} from "./data/dummy-data";
import {Col} from "react-native-easy-grid";

const width = Dimensions.get('window').width;

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollEnabled: false,
        }
    }

    renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={style.box}>
                <View style={{...style.tile, ...{backgroundColor: itemData.item.color}}}>
                    <Text style={style.title}>{itemData.item.category}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    static navigationOptions = {
        title: 'Statistics',

    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>


                {/*<ProfileHeader/>*/}
                <BezierLineChart></BezierLineChart>

                <FlatList keyExtractor={(item, index) => item.id}
                          data={HEALTHMETRICS}
                          renderItem={this.renderGridItem}
                          scrollEnabled={this.state.scrollEnabled}
                >
                </FlatList>



                <View style={style.bottomButton}>

                    <TouchableOpacity
                        style={style.bottomButton}
                        onPress={() => navigate('Camera')}
                    >
                        <View >
                            <Ionicons name='md-camera' size={40} color='white'></Ionicons>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>


        )
    }
}

HomeScreen.navigationOptions = props => {
    const {navigate } = props.navigation;

    return {
        headerTitle: "Statistics",
        headerStyle: {
            backgroundColor: Colors.headerColor
        },
        headerTintColor: 'white',
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="FAVE" iconName='ios-contact' onPress={()=>{
                navigate('Login');


            }}/>
        </HeaderButtons>

    };


};

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    box: {
        // backgroundColor: '#3456',
        height: 100,
        margin: 10,
        width: width - 20,

        justifyContent: 'center',
        alignItems: 'center'


    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150

    },
    bottomButton: {
        backgroundColor: Colors.headerColor,
        position: 'absolute',
        bottom: 0,
        tintColor: 'white',
        width: width,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'

    },
    buttonCamera: {
        color: 'white'
    },
    profileStyle: {
        height: 100
    },
    tile: {
        flex: 1,

        width: width - 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 10,


    },
    title: {
        fontFamily: 'Arial',
        fontSize: 22
    }


});

export default HomeScreen;
