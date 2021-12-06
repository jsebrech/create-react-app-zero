// import { render, screen } from '@testing-library/react';
import { html, render, screen, expect } from './setupTests.js';
import App from '../src/App.js';

it("renders learn react link", () => {
  render(html`<${App} />`);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).to.not.be.undefined;
});
