var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// Load Foundation 5
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')
  );
