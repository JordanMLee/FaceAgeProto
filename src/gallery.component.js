import React from 'react';
import {View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

export default ({captures = []}) => (
    <ScrollView
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]}
    >
        {captures.map(({uri,base64}) => (
            <TouchableOpacity onPress={async () => {


                try {

                    let resp = await fetch('https://2d2cmhl2yb.execute-api.us-east-2.amazonaws.com/test/predictemotions', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({data: base64})
                    });

                    let response = await resp.json();

                    Alert.alert(response.body);
                    return response;


                } catch (error) {
                    console.log(error)
                }

            }}>
                <View style={styles.galleryImageContainer} key={uri}>
                    <Image source={{uri}} style={styles.galleryImage}/>
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
);


