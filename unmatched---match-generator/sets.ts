export type Character = {
  name: string;
};

export type Board = {
  name: string;
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
      { name: "Invisible Man" },
      { name: "Jekyll & Hide" },
      { name: "Dracula" },
      { name: "Sherlock Holmes" },
    ],
    boards: [{ name: "Soho" }, { name: "Baskerville Manor" }],
  },
  {
    name: "Robin Hood vs Big Foot",
    characters: [{ name: "Robin Hood" }, { name: "BigFoot" }],
    boards: [{ name: "Yukon" }, { name: "Sherwood Forest" }],
  },
  {
    name: "Ingen vs Raptoprs",
    characters: [{ name: "Ingen" }, { name: "Raptors" }],
    boards: [{ name: "Raptor Paddock" }],
  },
  {
    name: "Bruce Lee",
    characters: [{ name: "Bruce Lee" }],
    boards: [],
  },
  {
    name: "Deadpool",
    characters: [{ name: "Deadpool" }],
    boards: [],
  },
];
