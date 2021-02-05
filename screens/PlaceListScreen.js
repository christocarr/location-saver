import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import Place from '../components/Place';
import * as Actions from '../store/places-actions';

function PlaceListScreen(props) {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Place
          image={item.image}
          title={item.title}
          address={null}
          onSelect={() =>
            props.navigation.navigate('Place Details Screen', {
              placeTitle: item.title,
              placeId: item.id,
              placeImg: item.image,
            })
          }
        />
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});

export default PlaceListScreen;
