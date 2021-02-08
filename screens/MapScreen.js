import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function MapScreen(props) {
  const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.48,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMarkerLocation = (ev) => {
    setSelectedLocation({
      lat: ev.nativeEvent.coordinate.latitude,
      lng: ev.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoords;
  if (selectedLocation) {
    markerCoords = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  } else {
    markerCoords = {
      latitude: 0,
      longitude: 0,
    };
  }

  const handleSave = () => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate('New Places Screen', {
      customLocation: selectedLocation,
    });
  };

  return (
    <View>
      <Button title="Save" onPress={handleSave} />

      <MapView
        style={styles.map}
        region={mapRegion}
        onPress={handleMarkerLocation}
      >
        <Marker coordinate={markerCoords} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
