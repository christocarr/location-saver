import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

function Place(props) {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.placeContainer}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  placeContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 300,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  container: {},
  title: {},
  address: {},
});

export default Place;
