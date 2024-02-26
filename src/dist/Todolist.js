"use strict";
exports.__esModule = true;
exports.Todolist = void 0;
var react_1 = require("react");
function Todolist(props) {
    var onAllClickHandler = function () { return props.changeFilter('all', props.id); };
    var onActiveClickHandler = function () { return props.changeFilter('active', props.id); };
    var onCompletedClickHandler = function () { return props.changeFilter('completed', props.id); };
    var removeTodolist = function () {
        props.removeTodolist(props.id);
    };
    return React.createElement(React.Fragment, null,
        React.createElement("h3", null,
            props.title,
            React.createElement("button", { onClick: removeTodolist }, "x")),
        React.createElement(AddItemForm, { id: props.id, addTask: props.addTask }),
        React.createElement("ul", null, props.tasks.map(function (t) {
            var onRemoveHandler = function (e) {
                return props.removeTask(t.id, props.id);
            };
            var onChangeHandler = function (e) {
                return props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
            };
            return React.createElement("li", { key: t.id, className: t.isDone ? 'is-done' : "" },
                React.createElement("input", { type: "checkbox", onChange: onChangeHandler, checked: t.isDone }),
                React.createElement("span", null, t.title),
                React.createElement("button", { onClick: onRemoveHandler }, "x"));
        })),
        React.createElement("div", null,
            React.createElement("button", { className: props.filter === 'all' ? 'active-filter' : '', onClick: onAllClickHandler }, "All"),
            React.createElement("button", { className: props.filter === 'active' ? 'active-filter' : '', onClick: onActiveClickHandler }, "Active"),
            React.createElement("button", { className: props.filter === 'completed' ? 'active-filter' : '', onClick: onCompletedClickHandler }, "Completed")));
}
exports.Todolist = Todolist;
function AddItemForm(props) {
    var _a = react_1.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(null), error = _b[0], setError = _b[1];
    var onChangeHandler = function (e) {
        setTitle(e.currentTarget.value);
    };
    var onKeyUpHandler = function (e) {
        setError(null);
        if (e.key === 'Ctrl+Enter' || e.key === 'Enter') {
            addTask();
        }
    };
    var addTask = function () {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.id);
            setTitle('');
        }
        else {
            setError("Title is required");
        }
    };
    return React.createElement("div", null,
        React.createElement("input", { value: title, onChange: onChangeHandler, onKeyUp: onKeyUpHandler, className: error ? 'error' : "" }),
        React.createElement("button", { onClick: addTask }, "+"),
        error && React.createElement("div", { className: 'error-message' }, error));
}
