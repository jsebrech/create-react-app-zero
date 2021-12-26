# Getting Started with Create React App Zero

This is a template for [Create React App Zero](https://github.com/jsebrech/create-react-app-zero),
an alternative to [Create React App](https://github.com/facebook/create-react-app) that requires no build tools and has no external dependencies.

Feel free to fork and make it your own.

## Developing

There are no build tools required. All you need is a (static) web server and a text editor.

This app is entirely self-contained and does not rely on any external dependencies for running or developing beyond the browser, web server and text editor. This guarantees that no external change will break this app.

### Running

Run a local web server for the `public` folder and browse to `index.html`.

Examples of static web servers you can run:

- node: `npx serve public`
- php: `php -S localhost:8000 -t public`
- python: `python3 -m http.server 8000 --directory public`

When you make edits, save the file and reload in the browser.
If your editor supports eslint, it should show lint errors inline.

### Testing

Browse to `test/index.html`, the tests will run automatically.

The tests are set up using *mocha* instead of *jest*, but otherwise mimic the test setup from Create React App.

### Building

There are no builds. You edit the source, you refresh the page, slinging web code like it's 2005.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

Some things are changed compared to the standard way React projects usually do them:

- [JSX](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx) is replaced by [htm](https://github.com/developit/htm)
- `node_modules` and `webpack` are replaced by [ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and UMD/ESM files in the lib folder (see the section on dependencies below)
- `postcss` and `sass` are replaced by CSS3 `@import` and [BEM notation](http://getbem.com/introduction/) (tip: add [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for additional modularity)
- `babel` is replaced by [ES8 in the browser](https://caniuse.com/?search=es8)

### Dependencies

In a usual React project we would use `npm install` to install dependencies into the `node_modules` folder,
and use `webpack` to build a bundle of our app and the dependencies it uses. This project avoids `npm` and `webpack` and instead chooses to include the dependencies pre-built to run in the browser directly.

To add a new dependency:
- Go to [unpkg.com](https://unpkg.com), find the package you want.
- Download the [UMD](https://github.com/umdjs/umd) or [ESM](https://nodejs.org/api/esm.html) build and place it in the `lib/` folder.

To add an UMD library:
- Add a script tag to `index.html` to load the library as a property on the `window` object.
- Edit `src/imports.js` to export the parts of the library you need.

To add an ESM library:
- Edit `src/imports.js` and import the library directly from the `lib/` folder.
- Export the parts of the library you need.

In your code, import the necessary symbols from `src/imports.js`.

Out of the box there are examples of both UMD and ESM libraries being used.

### Deployment

Upload the contents of the `public/` folder to a web host, or deploy it on github pages.

### But what about...

While a best effort has been made to bring you an authentic React web development experience without build tools or external dependencies, there are some things which you may notice are absent.

- **minification**: the dependencies are minified, and if your app code is so big to need minification, you probably need to use Create React App instead of this, but indeed there is no minification.
- **bundling and tree shaking**: again, the dependencies are pre-shaken and pre-bundled, but the app code itself is not. Host on HTTP/2 to benefit from [multiplexing](https://developers.google.com/web/fundamentals/performance/http2/#request_and_response_multiplexing) and limit the performance impact of the lack of bundling.
- **routing**: add the [UMD version of React Router](https://unpkg.com/browse/react-router/umd/) and [set up a HashRouter](https://www.pluralsight.com/guides/using-react-router-with-cdn-links).
- **linting**: if you use *VS Code* with the *eslint* extension it should pick up the `.eslintrc.json` config and lint your project automatically.
- **Internet Explorer**: it's time to let it go, seriously. But yes, no IE support, at all. Browser support in general should be pretty good though because all popular browsers are modern browsers.

To learn more about the rationale for Create React App Zero, [start with why](WHY.md).
