import * as FileSystem from 'expo-file-system';
import { insertPlace, fetchPlaces } from '../helper/db';
export const ADD_PLACE = 'ADD_PLACE';
export const GET_PLACES = 'GET_PLACES';

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyAbeC1V2VB_2zwOEyScz9qGCjzRA7sXnuk`
    );
    if (!response.ok) {
      throw new Error('Something is wrong');
    }

    const data = await response.json();

    if (!data.results) {
      throw new Error('Something is wrong');
    }

    const address = data.results[0].formatted_address;

    const fileName = image.split('/').pop();

    const path = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: path,
      });
      const result = await insertPlace(
        title,
        path,
        address,
        location.lat,
        location.lng
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: result.insertId,
          title,
          image: path,
          address: address,
          coords: {
            lat: location.lat,
            lng: location.lng,
          },
        },
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};

export const getPlaces = () => {
  return async (dispatch) => {
    try {
      const result = await fetchPlaces();
      dispatch({ type: GET_PLACES, places: result.rows._array });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};
