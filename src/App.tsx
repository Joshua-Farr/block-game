import { Wrapper } from "./components/Wrapper";

import "./App.css";
import { generateGrid } from "./utils/generateGrid";

export const App = () => {
  return <Wrapper>{generateGrid(20)}</Wrapper>;
};
