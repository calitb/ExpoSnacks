import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Provider from "./Location/Provider"
import Content from './components/Content';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Content />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
});
