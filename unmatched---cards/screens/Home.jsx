import * as React from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { unmatched } from "../unmatched";
import { others } from "../others";

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {unmatched.map((character) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('Details', { character })}>
                <Image source={character.image} style={styles.cardImg} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text style={[styles.purchased, styles.others]}>Otros luchadores ({others.length})</Text>
        <View style={styles.content}>
          {others.map((character) => (
            <View style={styles.itemContainer}>
              <Image source={character.image} style={styles.cardImg} />
              <Text style={styles.name}>{character.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const CARD_WIDTH = Dimensions.get('screen').width * 0.32;
const CARD_HEIGHT = 175;

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
    width: CARD_WIDTH,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  cardImg: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
  others: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  }
});
