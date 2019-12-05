import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
    BarChart
} from "react-native-chart-kit";

import * as firebase from 'firebase';

class EmotionsChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Emotions Chart</Text>
                <BarChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width -15 }
                    height={175}
                    chartConfig={{
                        backgroundGradientFrom: "#1E2923",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#08130D",
                        backgroundGradientToOpacity: 0.5,
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(25, 255, 155, ${opacity}`
                    }}
                >
                </BarChart>
            </View>
        )
    }

}

export default EmotionsChart;
