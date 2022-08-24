import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Ability from "../components/Ability";
import ReferenceCard from "../components/ReferenceCard";
import { List } from 'react-native-paper';
import Card from "../components/Card";
import Attack from "../components/Attack";

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

        <View style={styles.accordionContainer}>
          <List.Accordion
            style={styles.accordion}
            titleStyle={styles.accordionTitle}
            title="Habilidad"
          >
            <Ability character={character} />
          </List.Accordion>
        </View>

        <View style={styles.accordionContainer}>
          <List.Accordion
            style={styles.accordion}
            titleStyle={styles.accordionTitle}
            title="En tu Turno"
          >
            <ReferenceCard character={character} />
          </List.Accordion>
        </View>

        <View style={styles.accordionContainer}>
          <List.Accordion
            style={styles.accordion}
            titleStyle={styles.accordionTitle}
            title="Secuencia de Ataque"
          >
            <Attack character={character} />
          </List.Accordion>
        </View>

        <View style={styles.accordionContainer}>
          <List.Accordion
            style={styles.accordion}
            titleStyle={styles.accordionTitle}
            title="Cartas"
          >
            {character.cards.map((card) => <Card card={card} />)}
          </List.Accordion>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: 10
  },
  accordionContainer: {
    backgroundColor: "white",
    marginBottom: 25
  },
  accordion: {
    backgroundColor: "#C65516"
  },
  accordionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
