import { App } from "./App.js";
import { Addlinks } from "./components/AddLinks.js";

const app = App();
const addingLinkPage = Addlinks();

document.getElementById("root").innerHTML = app;
document.getElementById("addLinkRoot").innerHTML = addingLinkPage;
