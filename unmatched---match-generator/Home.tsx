import * as React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Button, Divider, RadioButton } from "react-native-paper";
import { sets } from "./sets";

type Item = { name: string; checked: boolean };

const DEFAULT_CARD = { width: 124.4, height: 175 };

export default function App() {
  const [selectedCharacters, setSelectedCharacters] = React.useState<Item[]>([]);
  const [selectedBoards, setSelectedBoards] = React.useState<Item[]>([]);

  const { width, height } = useWindowDimensions();
  const CARD_WIDTH = width < height ? width * 0.32 : height * 16.5;
  const CARD_HEIGHT = CARD_WIDTH / DEFAULT_CARD.width * DEFAULT_CARD.height;

  React.useEffect(() => {
    const characters: Item[] = [];
    const boards: Item[] = [];

    sets.forEach((set) => {
      characters.push(
        ...set.characters.map((character) => ({
          ...character,
          checked: character.ladder,
        }))
      );
      boards.push(
        ...set.boards.map((board) => ({
          name: `${board.name} (${set.name})`,
          checked: board.ladder,
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
        <Button onPress={generateMatch}>Generate Match</Button>
        <Divider />
        {
          characters.length === 2 && <Text style={styles.paragraph}>
            {`${characters[0]} vs ${characters[1]}\nin ${board}`}
          </Text>
        }
        <Divider />
        <View style={styles.content}>
          {selectedCharacters.map((character) => (
            <TouchableOpacity onPress={() => onToggleCharacter(character)}>
              <View style={[styles.characterContainer, { width: CARD_WIDTH }]}>
                <Image source={character.image} style={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                }} />
                <RadioButton.Android
                  key={character.name}
                  value={character.name}
                  style={{ position: 'absolute', bottom: 0 }}
                  status={character.checked ? "checked" : "unchecked"}
                  onPress={() => onToggleCharacter(character)}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  characterContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
  },
});
