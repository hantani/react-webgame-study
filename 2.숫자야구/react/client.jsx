const React = require("react");
const ReactDom = require("react-dom/client");

const NumberBaseball = require("./");

const rootNode = document.getElementById("root");

ReactDom.createRoot(rootNode).render(<NumberBaseball />);
