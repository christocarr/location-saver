import { ADD_PLACE, GET_PLACES } from './places-actions';
import Place from '../models/place';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image
      );

    case GET_PLACES:
      return {
        places: action.places.map(
          (place) => new Place(place.id.toString(), place.title, place.imgUri)
        ),
      };

    default:
      return state;
  }
};
