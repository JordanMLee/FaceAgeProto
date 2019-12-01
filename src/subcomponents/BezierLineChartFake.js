import React, {Component} from 'react';
import {Text, View, Dimensions,} from "react-native";
import {
    LineChart,
    BarChart,
    ProgressChart
} from "react-native-chart-kit";
import * as firebase from "firebase";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class BezierLineChartFake  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotions: [11,12,13,14,15,16,17]
        }
    }
    componentDidMount() {
        this.getDBData();
    }

    getDBData = () => {

        let database = firebase.database();
        let ref = database.ref('userFaceAge');
        ref.on('value',(data) => {
            this.setState({emotions: data.val()});

        }, (err) => {
            console.log(err)
        });

    };

    getFakeData = () => {
        return [
            11,12,13,14,15,16,17

        ];
    };


    render() {
        return (
            <View>
                <Text style={{padding:5}}>Emotions</Text>
                <LineChart
                    data={{
                        labels: ["Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov"],
                        datasets: [
                            {
                                data: this.state.emotions,

                            }
                        ]
                    }}
                    width={Dimensions.get("window").width -15 } // from react-native
                    height={175}
                    // yAxisLabel={"$"}
                    // yAxisSuffix={"k"}
                    chartConfig={{
                        backgroundColor: "#f5428d",
                        backgroundGradientFrom: "#f5428d",
                        backgroundGradientTo: "#f5428d",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#f5428d"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        margin:5
                    }}
                />
            </View>
        )

    }
}
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};

export default  BezierLineChartFake;
