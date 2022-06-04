import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ReferenceCard() {
  return (
    <View style={styles.container}>
      <View style={[styles.blackContainer, { borderTopStartRadius: 8, borderTopEndRadius: 8 }]}>
        <Text style={[styles.title, { color: 'white' }]}>
          En tu Turno
        </Text>
      </View>
      <View style={styles.whiteContainer}>
        <Text style={styles.text}>
          Debes tomar 2 acciones. Puedes escoger dos acciones diferentes o la misma acción dos veces.
        </Text>
      </View>
      <View style={styles.blackContainer}>
        <Text style={[styles.text, { color: 'white', textAlign: 'center' }]}>
          No olvides la habilidad especial de tu héroe
        </Text>
      </View>
      <ActionRow title={`M\na\nn\ni\no\nb\nr\na\nr`}>
        Toma una carta. (Obligatorio){'\n'}Mueve tus luchadores (opcional){'\n'}Puedes descartar cartas para aplicar BOOST a tu movimiento.
      </ActionRow>
      <View style={{ height: 0.5, backgroundColor: 'black' }} />
      <ActionRow title="Estrategia">
        Juega una scheme carta.
      </ActionRow>
      <View style={{ height: 0.5, backgroundColor: 'black' }} />
      <ActionRow title="Atacar">
        Juega una carta de ataque o versatil boca abajo.
      </ActionRow>
      <View style={[styles.blackContainer, { borderBottomStartRadius: 8, borderBottomEndRadius: 8 }]}>
        <Text style={[styles.text, { color: 'white', textAlign: 'center' }]}>
          Al final de tu turno, descarta hasta que tengas 7 cartas o menos.
        </Text>
      </View>
    </View >
  )
}

function ActionRow({ children }: React.FC<{ title: string }>) {
  return (
    <View style={[styles.whiteContainer, { flex: 1 }]}>
      <Text style={[styles.text, { flex: 1 }]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  blackContainer: {
    backgroundColor: 'black',
    padding: 10
  },
  whiteContainer: {
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
  },
});
