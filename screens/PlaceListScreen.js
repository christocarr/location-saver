import React from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

function PlaceListScreen(props) {
  return (
    <View>
      <View>
        <Text onPress={() => props.navigation.navigate('Place Details Screen')}>
          Place
        </Text>
      </View>
    </View>
  );
}

// PlaceListScreen.navigationOptions = (navData) => {
//   return {
//     headerRight: (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Add place"
//           iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
//           onPress={() => navData.navigation.navigate('New Places Screen')}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

const styles = StyleSheet.create({});

export default PlaceListScreen;
