import { Block } from "../components/Block";
import { generateRandomColor } from "./generateRandomColor";

export const generateGrid = (numberOfBlocks: number) => {
  const gridOfBlocks = [];

  for (let i = 0; i < numberOfBlocks; i++) {
    const randomColor = generateRandomColor([
      "red",
      "green",
      "blue",
      "purple",
      "orange",
    ]);

    gridOfBlocks.push(<Block color={randomColor}></Block>);
  }

  return gridOfBlocks;
};
