import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import NewPlacesScreen from './screens/NewPlacesScreen';
import PlaceListScreen from './screens/PlaceListScreen';
import PlaceDetailsScreen from './screens/PlaceDetailsScreen';
import Colors from './constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './components/HeaderButton';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import PlacesReducer from './store/places-reducers';

const roodReducer = combineReducers({
  places: PlacesReducer,
});

const store = createStore(roodReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Place List Screen"
          screenOptions={{
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android' ? Colors.primary : 'white',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primary,
          }}
        >
          <Stack.Screen
            name="Place List Screen"
            component={PlaceListScreen}
            options={({ navigation }) => ({
              title: 'Places',
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Add place"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => navigation.navigate('New Places Screen')}
                  />
                </HeaderButtons>
              ),
            })}
          />
          <Stack.Screen
            name="Map Screen"
            component={MapScreen}
            options={{ title: 'Map' }}
          />
          <Stack.Screen
            name="New Places Screen"
            component={NewPlacesScreen}
            options={{ title: 'Add new place' }}
          />
          <Stack.Screen
            name="Place Details Screen"
            component={PlaceDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
