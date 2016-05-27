var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Load Foundation 5
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
  );
