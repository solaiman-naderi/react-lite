import { createElement } from "@core/index";
import { render } from "@dom/index";

function App() {
  return (
    <div>
      <h1>سلام</h1>
      <button onclick={() => alert("hi")}>کلیک</button>
    </div>
  );
}

const root = document.getElementById("root");

if (root) {
  render(App(), root);
}
