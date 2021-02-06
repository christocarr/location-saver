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
import { readAsStringAsync } from 'expo-file-system';
import { set } from 'react-native-reanimated';

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
    <View>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No Location selected</Text>
        )}
      </View>

      <Button title="Get location" onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default LocationSelector;
