import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, IconButton, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const BOOST = "⚫️";
const types = {
  "attack": "🔴",
  "defense": "🔵",
  "scheme": "🟡",
  "versatile": "🟣"
}

export default function Details(props) {
  const character = props.route.params.character;

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: `${character.name} (${character.amount ?? ''})`,
      headerRight: () => <IconButton icon="info" size={24} onPress={showDialog} color="#000" />,
    });
  }, [props.navigation, props.route.params.character]);

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Unmatched Attacks</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{`Orden de Efectos\n1. Immediately (Defender)\n2. Immediately (Attacker)\n3. During Combat (Defender)\n4. During Combat (Attacker)\n5. After Combat (Defender)\n6. After Combat (Attacker)`}</Paragraph>
            </Dialog.Content>
            <Dialog.Content>
              <Paragraph>El combate lo gana el atacante si logra hacer al menos un daño de combate (daño al defensor del ataque en si, no de ningun efecto), en caso contrario lo gana el defensor.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

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
    </Provider>
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
