import { Nav } from "./components/Nav.js";
import { Player } from "./components/Player.js";
import { Addlinks } from "./components/AddLinks.js";
export const App = () => {
  return [Nav("Mahdi"), Addlinks(), Player()];
};
