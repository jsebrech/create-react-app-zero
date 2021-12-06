// https://unpkg.com/htm@3.1.0/dist/htm.module.js
import htm from '../lib/htm.module.js';

const { React, ReactDOM } = window;

const html = htm.bind(React.createElement);

export { React, ReactDOM, html }
