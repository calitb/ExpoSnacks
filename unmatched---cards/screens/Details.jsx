import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const BOOST = "⚫️";
const types = {
  "attack": "🔴",
  "defense": "🔵",
  "scheme": "🟡",
  "versatile": "🟣"
}

export default function Details(props) {
  const character = props.route.params.character;

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: `${character.name} (${character.amount ?? ''})`,
    });
  }, [props.navigation, props.route.params.character]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {character.cards.map((card) => {
          const { name, descripcion, type, value, amount, character, boost } = card;
          const typeIcon = types[type];

          return (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>
                {name}
                {character !== 'any' &&
                  <Text style={styles.title}>
                    {" "}({character})
                  </Text>}
                {"\n"}
              </Text>
              <View style={styles.contentView}>
                <Text style={styles.subtitle}>
                  {amount > 1 ? `${amount}x ` : ''}
                  {typeIcon.padStart(value * typeIcon.length, typeIcon)}
                  {BOOST.padStart(boost * BOOST.length, BOOST)}
                </Text>
                <Text style={styles.description}>{descripcion}</Text>
              </View>
            </View>
          )
        }
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: 10
  },
  itemContainer: {
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentView: {
    paddingHorizontal: 16
  },
  subtitle: {
    marginTop: -16,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 16,
    fontSize: 18,
  },
});
