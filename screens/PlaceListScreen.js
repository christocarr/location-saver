import React from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import Place from '../components/Place';

function PlaceListScreen(props) {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Place
          image={null}
          title={item.title}
          address={null}
          onSelect={() =>
            props.navigation.navigate('Place Details Screen', {
              placeTitle: item.title,
              placeId: item.id,
            })
          }
        />
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});

export default PlaceListScreen;
