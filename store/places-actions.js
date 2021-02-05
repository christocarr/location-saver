import * as FileSystem from 'expo-file-system';
import { insertPlace, fetchPlaces } from '../helper/db';
export const ADD_PLACE = 'ADD_PLACE';
export const GET_PLACES = 'GET_PLACES';

export const addPlace = (title, image) => {
  return async (dispatch) => {
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
        'test address,',
        15.22,
        100.2
      );
      dispatch({
        type: ADD_PLACE,
        placeData: { id: result.insertId, title, image: path },
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
      console.log(result);
      dispatch({ type: GET_PLACES, places: result.rows._array });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};
