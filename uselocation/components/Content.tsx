import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useLocation from "../Location/useLocation";

export default function Content() {
  const location = useLocation();

  return (
    <View style={styles.container}>
      <Text>Latitude: {location?.coords.latitude}</Text>
      <Text>Longitude: {location?.coords.longitude}</Text>
      <Text>Altitude: {location?.coords.altitude}</Text>
      <Text>Accuracy: {location?.coords.accuracy}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
