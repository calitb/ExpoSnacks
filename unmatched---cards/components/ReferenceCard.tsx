import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  character: any;
}

export default function ReferenceCard(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
        <Text style={styles.text}>
          Debes tomar 2 acciones. Puedes escoger dos acciones diferentes o la
          misma acción dos veces.
        </Text>
      </View>
      <ActionRow title={`MANIOBRAR`}>
        Toma una carta. (Obligatorio){"\n"}Mueve tus luchadores (opcional){"\n"}
        Puedes descartar una carta para aplicar BOOST a tu movimiento.
      </ActionRow>
      <Line />
      <ActionRow title="ESTRATEGIA">Juega una carta ⚡️.</ActionRow>
      <Line />
      <ActionRow title="ATACAR">
        Ataca jugando una carta de ataque o versatil boca abajo.
      </ActionRow>
      <View
        style={[
          styles.blackContainer,
          { borderBottomStartRadius: 8, borderBottomEndRadius: 8 },
        ]}
      >
        <Text style={[styles.text, { color: "white", textAlign: "center" }]}>
          Al final de tu turno, descarta hasta que tengas un máximo de 7 cartas.
        </Text>
      </View>
    </View>
  );
}

export function ActionRow({ children, title }: React.FC<{ title: string }>) {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.whiteContainer, { backgroundColor: "red" }]}>
        <Text
          style={[
            styles.text,
            { color: "white", fontWeight: "bold", fontSize: 20 },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={[styles.whiteContainer, { flex: 1 }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

export function Line() {
  return <View style={{ height: 0.5, backgroundColor: "black" }} />;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    marginTop: 5,
    marginHorizontal: 10,
  },
  blackContainer: {
    backgroundColor: "black",
    padding: 10,
  },
  whiteContainer: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});
