import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function MapPreview({ location, children, style }) {
  let imagePreviewURL;
  if (location) {
    const lat = location.lat;
    const lng = location.lng;
    imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x400&key=AIzaSyAbeC1V2VB_2zwOEyScz9qGCjzRA7sXnuk`;
  }
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? (
        <Image style={styles.image} source={{ uri: imagePreviewURL }} />
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default MapPreview;
