import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapPreview from './MapPreview';

function LocationSelector(props) {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const verifyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert('You need to grant permissions to get the location!', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };

  const getLocation = async () => {
    const permission = await verifyPermission();
    if (!permission) {
      return;
    }
    try {
      setIsLoading(true);
      const result = await Location.getCurrentPositionAsync({
        timeInterval: 5000,
      });
      setLocation({
        lat: result.coords.latitude,
        lng: result.coords.longitude,
      });
    } catch (err) {
      Alert.alert('Could not get location', [{ text: 'Okay' }]);
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.locationSelector}>
      <MapPreview style={styles.MapPreviewContainer} location={location}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No Location selected</Text>
        )}
      </MapPreview>

      <Button title="Get location" onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  locationSelector: {
    marginBottom: 10,
  },
  MapPreviewContainer: {
    width: '100%',
    height: 200,
    borderColor: '#ccc',
    borderWidth: 4,
    marginBottom: 10,
  },
});

export default LocationSelector;
