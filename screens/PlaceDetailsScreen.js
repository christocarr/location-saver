import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PlaceDetailsScreen(props) {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate('Map Screen')}>
        Place details
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default PlaceDetailsScreen;
