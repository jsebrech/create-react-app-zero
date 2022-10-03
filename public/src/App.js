import { html, Routes, Link, Route, h } from './imports.js';

function App() {
  return (
    html`
      <div>
        <ul>
          <li>
            <${Link} to="/">Home<//>
          </li>
          <li>
            <${Link} to="/about">About<//>
          </li>
          <li>
            <${Link} to="/dashboard">Dashboard<//>
          </li>
        </ul>

        <hr />

        <${Routes}>
          <${Route} exact path="/" element=${h(Home)}><//>
          <${Route} path="/about" element=${h(About)}><//>
          <${Route} path="/dashboard" element=${h(Dashboard)}><//>
        <//>
      </div>
    `
  );
}

function Home() {
  return html`<div><h2>Home</h2></div>`;
}

function About() {
  return html`<div><h2>About</h2></div>`;
}

function Dashboard() {
  return html`<div><h2>Dashboard</h2></div>`;
}


export default App;
