import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

function UsersMap(props) {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map}/>
    </View>
  );
}



const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

console.log(styles);

export default UsersMap;
