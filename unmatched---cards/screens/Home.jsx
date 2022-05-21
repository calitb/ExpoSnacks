import * as React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { unmatched } from "../unmatched";
import { others } from "../others";

const DEFAULT_CARD = { width: 124.4, height: 175 };

export default function Home(props) {
  const { width, height } = useWindowDimensions();

  const CARD_WIDTH = width < height ? width * 0.32 : height * 16.5;
  const CARD_HEIGHT = CARD_WIDTH / DEFAULT_CARD.width * DEFAULT_CARD.height;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {unmatched.map((character) => (
            <View style={[styles.itemContainer, { width: CARD_WIDTH }]}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('Details', { character })}>
                <Image source={character.image} style={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                }} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text style={[styles.purchased, styles.others]}>Otros luchadores ({others.length})</Text>
        <View style={styles.content}>
          {others.map((character) => (
            <View style={[styles.itemContainer, { width: CARD_WIDTH }]}>
              <Image source={character.image} style={{
                height: CARD_HEIGHT,
                width: CARD_WIDTH,
              }} />
              <Text style={styles.name}>{character.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  others: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  }
});
