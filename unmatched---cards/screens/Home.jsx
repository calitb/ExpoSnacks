import * as React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { unmatched } from "../unmatched";

const DEFAULT_CARD = { width: 124.4, height: 175 };

const ladder = [
  "Achilles",
  "Alice",
  "Beowulf",
  "Luke Cage",
  "Sinbad",
  "Robin Hood",
  'Bruce Lee',
  "Yennenga",
  "Dr. Ellie Sattler",
  "Moon Knight"
]

export default function Home(props) {
  const size = 'medium'
  let { width, height } = useWindowDimensions();
  width -= 30;

  const sizes = {
    medium: { width: 0.32 * (6 / 8), height: 16.5 * (6 / 8) },
    large: { width: 0.32, height: 16.5 },
  };

  const CARD_WIDTH =
    width < height ? width * sizes[size].width : height * sizes[size].height;
  const CARD_HEIGHT = (CARD_WIDTH / DEFAULT_CARD.width) * DEFAULT_CARD.height;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {unmatched.filter(character => true
            // ladder.includes(character.name)
          ).sort((a, b) => a.name.localeCompare(b.name)).map((character) => (
            <View style={[styles.itemContainer, { width: CARD_WIDTH }]}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('Details', { character })}>
                {character.image && <Image source={character.image} style={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                }} />}
                {!character.image &&
                  <View style={{
                    backgroundColor: character.cards.length > 0 ? undefined : 'orange',
                    height: CARD_HEIGHT,
                    width: CARD_WIDTH,
                  }}>
                  </View>
                }
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
    borderColor: "gray",
    borderWidth: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
});
