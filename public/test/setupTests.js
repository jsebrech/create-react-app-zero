import { ReactDOM, html } from '../src/imports.js';

const { expect } = window.chai;
const { act } = window.ReactTestUtils;
const { getByText, queries } = window.TestingLibraryDom;

let rootContainer;
let screen;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
  // pre-bind @testing-library/dom helpers to rootContainer
  screen = Object.keys(queries).reduce((helpers, key) => {
    const fn = queries[key]
    helpers[key] = fn.bind(null, rootContainer)
    return helpers
  }, {});
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

function render(el) {
  act(() => {
    ReactDOM.render(el, rootContainer);
  });
}

export { ReactDOM, html, rootContainer, render, expect, act, getByText, screen };
