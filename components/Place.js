import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

function Place(props) {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.place}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  place: {},
  image: {},
  container: {},
  title: {},
  address: {},
});

export default Place;
