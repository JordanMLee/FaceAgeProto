import React, {Component} from 'react';
import {Text, View, Dimensions,} from "react-native";
import {
    LineChart,
    BarChart,
    ProgressChart
} from "react-native-chart-kit";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const BezierLineChart =() => {
    return (
        <View>
            <Text>Overall</Text>
            <LineChart
                data={{
                    labels: ["Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov"],
                    datasets: [
                        {
                            data: [
                                getRandomInt(24,28),
                                getRandomInt(24,28),
                                getRandomInt(24,28),
                                getRandomInt(24,28),
                                getRandomInt(24,28),
                                getRandomInt(24,28),
                                getRandomInt(24,28),
                                // Math.random() * 100,
                                // Math.random() * 100,
                                // Math.random() * 100,
                                // Math.random() * 100,
                                // Math.random() * 100,
                                // Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width -15 } // from react-native
                height={200}
                // yAxisLabel={"$"}
                // yAxisSuffix={"k"}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
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

};
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};

export default  BezierLineChart;
