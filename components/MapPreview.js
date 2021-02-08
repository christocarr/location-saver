import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

function MapPreview({ location, children, style }) {
  let imagePreviewURL;
  if (location) {
    const lat = location.lat;
    const lng = location.lng;
    imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x400&key=apiKEY`;
  }
  return (
    <TouchableOpacity style={{ ...styles.container, ...style }}>
      {location ? (
        <Image style={styles.image} source={{ uri: imagePreviewURL }} />
      ) : (
        children
      )}
    </TouchableOpacity>
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
