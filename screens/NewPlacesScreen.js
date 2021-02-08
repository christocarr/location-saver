import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import ImageSelector from '../components/ImageSelector';
import LocationSelector from '../components/LocationSelector';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';

function NewPlacesScreen(props) {
  const [titleValue, setTitleValue] = useState('');
  const [image, setImage] = useState(null);

  const handleInputChange = (text) => {
    setTitleValue(text);
  };

  const handleSelectedImage = (selectedImage) => {
    setImage(selectedImage);
  };

  const savePlace = () => {
    dispatch(placesActions.addPlace(titleValue, image));
    props.navigation.goBack();
  };

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleInputChange}
          value={titleValue}
        />
        <ImageSelector takenImage={handleSelectedImage} />
        <LocationSelector navigation={props.navigation} />
        <Button title="Add" onPress={savePlace} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default NewPlacesScreen;
