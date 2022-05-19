import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useDeviceMotion, {orientationToString} from "../DeviceMotion/useDeviceMotion";

export default function Content() {
  const deviceMotion = useDeviceMotion();

  return (
    <View style={styles.container}>
      <Text>Orientation: {orientationToString(deviceMotion?.orientation)}</Text>
      <Text>Acceleration: {JSON.stringify(deviceMotion?.acceleration)}</Text>
      <Text>Rotation: {JSON.stringify(deviceMotion?.rotation)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
