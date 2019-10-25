import React from 'react';
import {View, Text} from 'react-native';
import {Camera, Permissions, FaceDetector} from 'expo';

import styles from './styles';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';

export default class CameraPage extends React.Component {
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
    };

    setFlashMode = (flashMode) => this.setState({flashMode});
    setCameraType = (cameraType) => this.setState({cameraType});
    handleCaptureIn = () => this.setState({capturing: true});

    // handleCaptureOut = () => {
    //     if (this.state.capturing)
    //         this.camera.stopRecording();
    // };

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
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

    // handleLongCapture = async () => {
    //     const videoData = await this.camera.recordAsync();
    //     this.setState({capturing: false, captures: [videoData, ...this.state.captures]});
    // };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({hasCameraPermission});
        setTimeout(() => {
            this.detectFaces(true);

        }, 2000)
    };
    handleFacesDetected = ({ faces}) => {
        console.log(faces);
        this.setState({
            bounds: faces.bounds,
            yaw: faces.yawAngle,
        });

        if (faces.length === 1) {
            // faces detected
            this.setState({
                faceDetected: true,
            });


            // this.takePicture()

        } else {
            // no faces detected
            this.setState({
                faceDetected: false
            });
        }
        // if (faces.smilingProbability) {
        //     this.setState({
        //         smilingDetected: faces.smilingProbability
        //     })
        //
        // }


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
                    />
                    <Text
                        style={styles.textStandard}>
                        {this.state.faceDetected ? 'Face Detected' : 'No Face Detected'}
                    </Text>
                    <Text
                    style={styles.textStandard}>
                        {this.state.yaw}
                        {/*{this.state.bounds.origin.x}*/}
                        {/*{this.state.smilingDetected}*/}
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

