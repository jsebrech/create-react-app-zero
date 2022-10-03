// https://unpkg.com/htm@3.1.0/dist/htm.module.js
import htm from '../lib/htm.module.js';

const { React, ReactDOM, ReactRouterDOM } = window;

const h = React.createElement;

const html = htm.bind(React.createElement);

const { HashRouter, Routes, Link, Route } = ReactRouterDOM;

export { 
    React, ReactDOM, h, html,
    ReactRouterDOM, HashRouter, Routes, Link, Route
}
