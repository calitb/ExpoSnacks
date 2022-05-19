import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useCompass, {compass} from "../Compass/useCompass";

export default function Content() {
  const heading = useCompass();

  return (
    <View style={styles.container}>
      <Text>True Heading: {compass(heading?.trueHeading)}</Text>
      <Text>Magnetic Heading: {compass(heading?.magHeading)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
