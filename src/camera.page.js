import React from 'react';
import {View, Text, Button} from 'react-native';
import {Camera, Permissions, FaceDetector} from 'expo';

import styles from './styles';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
import Colors from "./constants/Colors";

import * as firebase from "firebase";

export default class CameraPage extends React.Component {
    constructor(props) {
        super(props);
    }

    camera = null;

    state = {
        captures: [],
        capturing: null,
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.front,
        flashMode: Camera.Constants.FlashMode.off,
        faceDetecting: false, // when true we look for faces
        faceDetected: false, // when true, we've found a face
        pictureTaken: false,

        smilingDetected: 0,
        yaw: 0,
        bounds: {},
        selectedImage: null,
        emotions: "Hello"
    };

    uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/");
        return ref.put(blob)
    };

    // resize_and_convert = async (image) => {
    //     return await ImageManipulator.manipulateAsync(
    //         image.uri,
    //         [
    //             {resize: {width: 48, height: 48}},
    //             // {rotate: 90}
    //
    //         ], {
    //             // format: ImageManipulator.SaveFormat.PNG
    //
    //         })
    // };

    sendToML = async (image) => {
        console.log("sending to ml")
        try {
            let resp = await fetch('https://2d2cmhl2yb.execute-api.us-east-2.amazonaws.com/test/predictemotions', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: image.base64})
            });

            let response = await resp.json();
            // await console.log(response);
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }

    };


    setFlashMode = (flashMode) => this.setState({flashMode});
    setCameraType = (cameraType) => this.setState({cameraType});
    handleCaptureIn = () => this.setState({capturing: true});

    // handleCaptureOut = () => {
    //     if (this.state.capturing)
    //         this.camera.stopRecording();
    // };

    handleShortCapture = async () => {
        console.log("Taking Picture");
        const photoData = await this.camera.takePictureAsync({
            base64: true

            // quality: 0.3
        });

        // const convertPhoto = await this.resize_and_convert(photoData);
        // this.setState({capturing: false, captures: [convertPhoto, ...this.state.captures]})
        const someCoolData = await this.sendToML(photoData);
        console.log('some cool data');
        console.log(someCoolData.body);
        this.setState({emotions: someCoolData.body})
        this.setState({capturing: false, captures: [photoData, ...this.state.captures]})
    };

    takePicture = async () => {
        if (this.camera) {
            const photoData = await this.camera.takePictureAsync({
                // onPictureSaved: this.onPictureSaved
            });
            this.setState({pictureTaken: true, capturing: false, captures: [photoData, ...this.state.captures]})
        }
    };

    onPictureSaved = () => {
        this.detectFaces(false)
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({hasCameraPermission});
        setTimeout(() => {
            this.detectFaces(true);

        }, 2000)
    };

    handleFacesDetected = ({faces}) => {
        // console.log(faces);
        if (faces.length === 1) {
            // faces detected
            this.setState({
                faceDetected: true,
                yaw: faces[0].yawAngle,
            });

        } else {
            // no faces detected
            this.setState({
                faceDetected: false
            });
        }


    };

    // face detection software
    detectFaces(doDetect) {
        this.setState({
            faceDetecting: doDetect,
        });
    }

    render() {
        const {hasCameraPermission, flashMode, cameraType, capturing, captures} = this.state;

        if (hasCameraPermission === null) {
            return <View/>;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <Button title="Profile" style={styles.captureBtn} onPress={() => {
                        this.props.navigation.navigate({
                            routeName: 'Home'
                        })
                    }}/>
                    <Camera
                        type={cameraType}
                        // flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                        onFacesDetected={this.state.faceDetecting ? this.handleFacesDetected : undefined}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.accurate,
                            detectLandmarks: FaceDetector.Constants.Mode.all,
                            runClassification: FaceDetector.Constants.Mode.all,
                            minDetectionInterval: 0,
                            tracking: false,
                        }}
                        // pictureSize={{width: 48, height: 48}}

                    />
                    <Text
                        style={styles.textStandard}>
                        {this.state.faceDetected ? 'Face Detected' : 'No Face Detected'}
                    </Text>
                    <Text
                        style={styles.textStandard}>
                        {this.state.faceDetected ? this.state.yaw : undefined}
                        {/*{this.state.bounds.origin.x}*/}
                        {/*{this.state.smilingDetected}*/}
                    </Text>

                    <Text style={styles.textStandard}>
                        {this.state.captures ? this.state.emotions : undefined}
                    </Text>
                </View>

                {captures.length > 0 && <Gallery captures={captures}/>}

                <Toolbar
                    capturing={capturing}
                    // flashMode={flashMode}
                    // cameraType={cameraType}
                    // setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    // onCaptureOut={this.handleCaptureOut}
                    // onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};

CameraPage.navigationOptions = props => {
    const {navigate} = props.navigation;
    return {
        headerStyle: {
            backgroundColor: Colors.headerColor
        },
        headerTintColor: 'white'

    }


};
