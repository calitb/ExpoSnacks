import * as React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { unmatched } from "../unmatched";

const DEFAULT_CARD = { width: 124.4, height: 175 };

const ladder = [
  'Dracula',
  'Bloody Mary',
  'Bruce Lee',
  'Daredevil',
  'Dr. Ellie Sattler',
  'Ingen',
  'Jekyll & Hyde',
  'King Arthur',
  'Little Red Riding Hood',
  'Sinbad'
]

export default function Home(props) {
  const { width, height } = useWindowDimensions();

  const CARD_WIDTH = width < height ? width * 0.32 : height * 16.5;
  const CARD_HEIGHT = CARD_WIDTH / DEFAULT_CARD.width * DEFAULT_CARD.height;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {unmatched.filter(character => ladder.includes(character.name)).map((character) => (
            <View style={[styles.itemContainer, { width: CARD_WIDTH }]}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('Details', { character })}>
                <Image source={character.image} style={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                }} />
                <Text style={{ textAlign: 'center', padding: 2 }}>{character.name}</Text>
              </TouchableOpacity>
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
  itemContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
});
