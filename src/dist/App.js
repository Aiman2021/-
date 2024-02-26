"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Todolist, null),
        react_1["default"].createElement(Todolist, null),
        react_1["default"].createElement(Todolist, null)));
}
function Todolist() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h3", null, "What to learn"),
        react_1["default"].createElement("input", null),
        react_1["default"].createElement("button", null, "+"),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("input", { type: "checkbox", checked: true }),
                react_1["default"].createElement("span", null, "CSS & HTML")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("input", { type: "checkbox", checked: true }),
                react_1["default"].createElement("span", null, "JS")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("input", { type: "checkbox", checked: false }),
                react_1["default"].createElement("span", null, "React"))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", null, "All"),
            react_1["default"].createElement("button", null, "Active"),
            react_1["default"].createElement("button", null, "Completed"))));
}
exports["default"] = App;
