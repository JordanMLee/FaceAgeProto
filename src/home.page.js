import React from 'react';
import Colors from "./constants/Colors";
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
                <View >
                    <Text>{itemData.item.category}</Text>
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

                <View style={style.profileStyle}>
                    <Text> Profile </Text>
                </View>

                <FlatList keyExtractor={(item, index) => item.id}
                          data={HEALTHMETRICS}
                          renderItem={this.renderGridItem}
                          scrollEnabled={this.state.scrollEnabled}
                >
                </FlatList>

                <View style={style.bottomButton}>
                    {/*<Button style={style.buttonCamera}*/}
                    {/*    title="Camera"*/}
                    {/*    onPress={() => navigate('Camera')}*/}
                    {/*/>*/}
                    <TouchableOpacity
                        style={style.bottomButton}
                        onPress={() => navigate('Camera')}
                    >
                        <View>
                            <Text color='white'>Camera</Text>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>


        )
    }
}

HomeScreen.navigationOptions = {
    headerTitle: "Statistics",
    headerStyle: {
        backgroundColor: Colors.headerColor
    },
    headerTintColor: 'white'




};

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: '#3456',
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
        bottom:0,
        tintColor: 'white',
        width:width,
        height:70,
        alignItems:'center',
        justifyContent:'center',
        color: 'white'

    },
    buttonCamera: {
        color: 'white'
    },
    profileStyle :{
        height: 100
    }



});

export default HomeScreen;
