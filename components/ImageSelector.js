import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import Colors from '../constants/Colors';
import * as imagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

function ImageSelector(props) {
  const [selectedImg, setSelectedImg] = useState();

  const verifyPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.MEDIA_LIBRARY
    );
    if (result.status !== 'granted') {
      Alert.alert('You need to grant permissions to use the camera!', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };

  const imageCaptureHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await imagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setSelectedImg(image.uri);
    props.takenImage(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imgContainer}>
        {!selectedImg ? (
          <Text>No image selected yet</Text>
        ) : (
          <Image
            source={{
              uri: selectedImg,
            }}
            style={styles.image}
          />
        )}
      </View>
      <Button
        title="Capture image"
        color={Colors.primary}
        onPress={imageCaptureHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    marginBottom: 30,
  },
  imageContainer: {
    backgroundColor: 'grey',
    maxWidth: '100%',
    height: '0',
  },
  image: {
    paddingTop: '56.25%',
  },
});

export default ImageSelector;
