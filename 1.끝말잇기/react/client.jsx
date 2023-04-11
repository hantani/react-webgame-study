const React = require("react");
const ReactDom = require("react-dom/client");

const WordRelay = require("./WordRelay");

const rootNode = document.getElementById("root");

ReactDom.createRoot(rootNode).render(<WordRelay />);
