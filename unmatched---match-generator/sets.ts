import { ImageSource } from "react-native";

export type Character = {
  name: string;
  image: ImageSource;
  ladder?: boolean;
};

export type Board = {
  name: string;
  ladder?: boolean;
};

type Sets = {
  name: string;
  characters: Character[];
  boards: Board[];
};

export const sets: Sets[] = [
  {
    name: "Cobble & Fog",
    characters: [
      { name: "Invisible Man", image: require("./assets/backs/invisible.jpg") },
      { name: "Jekyll & Hide", image: require("./assets/backs/jekyll.jpg") },
      { name: "Dracula", image: require("./assets/backs/dracula.jpg") },
      {
        name: "Sherlock Holmes",
        image: require("./assets/backs/sherlock.jpg"),
      },
    ],
    boards: [{ name: "Soho" }, { name: "Baskerville Manor", ladder: true }],
  },
  {
    name: "Robin Hood vs Big Foot",
    characters: [
      { name: "Robin Hood", image: require("./assets/backs/robinhood.jpg") },
      { name: "BigFoot", image: require("./assets/backs/bigfoot.jpg") },
    ],
    boards: [{ name: "Yukon" }, { name: "Sherwood Forest" }],
  },
  {
    name: "Ingen vs Raptoprs",
    characters: [
      {
        name: "Ingen",
        image: require("./assets/backs/ingen.jpg"),
        ladder: true,
      },
      {
        name: "Raptors",
        image: require("./assets/backs/raptors.jpg"),
        ladder: true,
      },
    ],
    boards: [{ name: "Raptor Paddock", ladder: true }],
  },
  {
    name: "Bruce Lee",
    characters: [
      {
        name: "Bruce Lee",
        image: require("./assets/backs/brucelee.jpg"),
        ladder: true,
      },
    ],
    boards: [],
  },
  {
    name: "Deadpool",
    characters: [
      {
        name: "Deadpool",
        image: require("./assets/backs/deadpool.jpg"),
        ladder: true,
      },
    ],
    boards: [],
  },
  {
    name: "BoL2",
    characters: [
      { name: "Sun Wukong", image: require("./assets/backs/sunwukong.jpg") },
      { name: "Yennenga", image: require("./assets/backs/yennenga.jpg") },
      { name: "Bloody Mary", image: require("./assets/backs/bloodymary.jpg") },
      { name: "Achilles", image: require("./assets/backs/achilles.jpg") },
    ],
    boards: [{ name: "Hanging Gardens" }],
  },
  {
    name: "Redemption Row",
    characters: [
      { name: "Ghost Rider", image: require("./assets/backs/ghostrider.jpg") },
      {
        name: "Moon Knight",
        image: require("./assets/backs/moonknight.jpg"),
        ladder: true,
      },
      { name: "Luke Cage", image: require("./assets/backs/luke.jpg") },
    ],
    boards: [{ name: "The Raft" }],
  },
  {
    name: "Dr. Sattler vs T.Rex",
    characters: [
      {
        name: "Dr. Sattler",
        image: require("./assets/backs/sattler.jpg"),
        ladder: true,
      },
      {
        name: "T. Rex",
        image: require("./assets/backs/trex.jpg"),
        ladder: true,
      },
    ],
    boards: [{ name: "T. Rex Paddock", ladder: true }],
  },
];
