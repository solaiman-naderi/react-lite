import { createElement } from "@core/index";
import { render } from "@dom/index";

const App = () =>
  createElement(
    "div",
    { id: "box" },
    createElement("h1", null, "سلام از VDOM خودمون!"),
    createElement("button", { onclick: () => alert("کلیک شد!") }, "کلیک کن")
  );

const root = document.getElementById("root");

if (root) {
  render(App(), root);
}
