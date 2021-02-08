import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MapPreview from '../components/MapPreview';

function PlaceDetailsScreen(props) {
  const { selectedPlaceId } = props.route.params;

  const selectedPlace = useSelector((state) =>
    state.places.places.find((place) => place.id === selectedPlaceId)
  );

  const coords = { lat: selectedPlace.lat, lng: selectedPlace.lng };

  const showMap = () => {
    props.navigation.navigate('Map Screen', {
      readOnly: true,
      location: coords,
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Image source={{ uri: selectedPlace.image }} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{selectedPlace.title}</Text>
          <Text>{selectedPlace.address}</Text>
        </View>
        <MapPreview style={styles.map} location={coords} onPress={showMap} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: '#ccc',
  },
  container: {
    marginVertical: 20,
    width: '90%',
    maxWidth: 350,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  infoContainer: {
    textAlign: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default PlaceDetailsScreen;
