import * as FileSystem from 'expo-file-system';
import { insertPlace } from '../helper/db';
export const ADD_PLACE = 'ADD_PLACE';

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
