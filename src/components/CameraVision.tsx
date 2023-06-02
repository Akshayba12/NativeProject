import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraInstall = () => {
  const devices = useCameraDevices();

  const device = devices.back;

  const camera = useRef(null);

  const [imageData, setImageData] = useState('');

  const [takePhotoClicked, setTakePhotoClicked] = useState(true);

  useEffect(() => {
    checkPermission;
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();

    const newMicrophonePermission = await Camera.requestMicrophonePermission();

    console.log(checkPermission);
  };

  if (device == null) {
    return <ActivityIndicator />;
  }

  const takePicture = async () => {
    if (camera !== null) {
      const photo = await camera.current.takePhoto();

      setImageData(photo.path);

      setTakePhotoClicked(false);

      console.log(photo.path);
    }
  };

  return (
    <View style={{flex: 1}}>
      {takePhotoClicked ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo
          />

          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#FF3C3C',
              bottom: 10,
              justifyContent: 'center',
              position: 'absolute',
              alignSelf: 'center',
            }}
            onPress={() => takePicture()}
          />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {imageData !== '' && (
            <Image
              source={{uri: 'file://' + imageData}}
              style={{width: '90%', height: 200}}
            />
          )}

          <TouchableOpacity
            style={{
              width: '90%',

              height: 50,

              borderWidth: 1,

              backgroundColor: '#FF3C3C',

              bottom: 10,

              justifyContent: 'center',

              alignItems: 'center',

              alignSelf: 'center',
            }}
            onPress={() => setTakePhotoClicked(true)}>
            <Text
              style={{
                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',
              }}>
              Click to take photo...
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CameraInstall;
