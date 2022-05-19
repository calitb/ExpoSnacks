import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { sets } from "./sets";
import Constants from "expo-constants";
import { Button, RadioButton, Divider } from "react-native-paper";

type Item = { name: string; checked: boolean };

export default function App() {
  const [selectedCharacters, setSelectedCharacters] = React.useState<Item[]>([]);
  const [selectedBoards, setSelectedBoards] = React.useState<Item[]>([]);

  React.useEffect(() => {
    const characters: Item[] = [];
    const boards: Item[] = [];

    sets.forEach((set) => {
      characters.push(
        ...set.characters.map((character) => ({
          checked: true,
          name: `${character.name} (${set.name})`,
        }))
      );
      boards.push(
        ...set.boards.map((board) => ({
          checked: true,
          name: `${board.name} (${set.name})`,
        }))
      );
    });

    setSelectedCharacters(characters);
    setSelectedBoards(boards);
  }, []);

  const [characters, setCharacters] = React.useState<string[]>([]);
  const [board, setBoard] = React.useState<string>();

  const generateMatch = () => {
    const availableCharacters = selectedCharacters.filter((character) => character.checked);
    const availableBoards = selectedBoards.filter((board) => board.checked);

    let character1 = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    let character2: Item;
    do {
      character2 = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    } while (character2 === character1);

    const board = availableBoards[Math.floor(Math.random() * availableBoards.length)];

    setCharacters([character1.name, character2.name]);
    setBoard(board.name);
  };

  const onToggleCharacter = (character: Item) => {
    character.checked = !character.checked;
    setSelectedCharacters([...selectedCharacters]);
  };

  const onToggleBoard = (board: Item) => {
    board.checked = !board.checked;
    setSelectedBoards([...selectedBoards]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Unmatched - Match Generator</Text>
        <Button onPress={generateMatch}>Generate</Button>
        <Divider />
        <Text style={styles.paragraph}>
          {characters.length === 2
            ? `${characters[0]} vs ${characters[1]}`
            : "Generate a match"}
        </Text>
        {board && <Text style={styles.paragraph}>Board: {board}</Text>}
        <Divider />
        <Text style={styles.paragraph}>Characters</Text>
        {selectedCharacters.map((character) => (
          <View style={styles.itemContainer}>
            <RadioButton.Android
              key={character.name}
              value={character.name}
              status={character.checked ? "checked" : "unchecked"}
              onPress={() => onToggleCharacter(character)}
            />
            <TouchableOpacity onPress={() => onToggleCharacter(character)}>
              <Text>{character.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.paragraph}>Boards</Text>
        {selectedBoards.map((board) => (
          <View style={styles.itemContainer}>
            <RadioButton.Android
              key={board.name}
              value={board.name}
              status={board.checked ? "checked" : "unchecked"}
              onPress={() => onToggleBoard(board)}
            />
            <TouchableOpacity onPress={() => onToggleBoard(board)}>
              <Text>{board.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
  },
});
