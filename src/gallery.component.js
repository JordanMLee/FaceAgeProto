import React from 'react';
import {View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import * as firebase from "firebase";
import styles from './styles';
import * as ImageManipulator from 'expo-image-manipulator';


export default ({captures = []}) => (
    <ScrollView
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]}
    >
        {captures.map(({uri,base64}) => (
            <TouchableOpacity onPress={async () => {

                // console.log(base64);
                // Alert.alert("image sent to server");
                // await _resize_and_convert(uri).then((uri) => {
                //     const response = await fetch(uri);
                //     const blob = await response.blob();
                //     let ref = firebase.storage().ref().child("images/");
                //     return ref.put(blob);
                // });
                // const response = await fetch(uri);
                // const blob = await response.blob();
                // let ref = firebase.storage().ref().child("images/");
                // return ref.put(blob);


                // converting the image

                // let filename = uri.split('/').pop();



                let formData = new FormData();
                // formData.append('data', {
                //     uri: uri,
                //     name: filename,
                //     type: 'image'
                // });
                // return await fetch('https://2d2cmhl2yb.execute-api.us-east-2.amazonaws.com/test/predictemotions', {
                //     method: 'POST',
                //     body: formData,
                //     header: {
                //         'content-type': 'multipart/form-data'
                //     }
                // }).then((res)=>{
                //     Alert.alert(res)
                // }).catch((res) => {
                //     Alert.alert(res)
                // });


                // const convert_uri = await _resize_and_convert(uri);
                // const response_c = await fetch(uri);
                // const blob_c = await response_c.blob();
                // //
                // // # send to aws
                let tmp = {
                    data:
                        base64

                };

                let payload = JSON.stringify(tmp);
                // console.log(payload);
                return await fetch('https://2d2cmhl2yb.execute-api.us-east-2.amazonaws.com/test/predictemotions', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: payload
                })
                    .then(function (res) {
                        console.log("success");
                        console.log(res)

                    }).catch(function (res) {
                        console.log(res)
                    });



            }}>


                <View style={styles.galleryImageContainer} key={uri}>
                    <Image source={{uri}} style={styles.galleryImage}/>
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
);


