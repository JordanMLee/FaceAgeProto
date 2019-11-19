import React from 'react';
import { View, Image, ScrollView, TouchableOpacity ,Alert} from 'react-native';
import * as firebase from "firebase";
import styles from './styles';

export default ({captures=[]}) => (
    <ScrollView
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]}
    >
        {captures.map(({ uri }) => (
            <TouchableOpacity onPress={async()=> {

                console.log(uri);

                const response = await fetch(uri);
                const blob = await response.blob();
                let ref = firebase.storage().ref().child("images/");

                return ref.put(blob);

            }}>


            <View style={styles.galleryImageContainer} key={uri}>
                <Image source={{ uri }} style={styles.galleryImage} />
            </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
);


