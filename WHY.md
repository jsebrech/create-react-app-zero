# Why Create React App Zero

Hi. I'm Joeri. I made [Create React App Zero](https://github.com/jsebrech/create-react-app-zero), a way of building React apps without any build tools or external dependencies, and I'd like to explain why.

First of all, I love [Create React App](https://create-react-app.dev/)! It has made building a single page web app with React very easy and brings a lot of power right out of the box.

But.

## The problem

Let's run it:

```sh
> npx create-react-app@5.0.0 my-app

Creating a new React app in /.../my-app.
[...]
Happy hacking!

> du -sh my-app

298M    my-app
```

298 megabytes! For a hello world app!

Why is that?

Randall Munroe as always [sums it up succinctly](https://xkcd.com/2347/):

![Dependency](https://imgs.xkcd.com/comics/dependency.png)

What causes this incredible size are all the external dependencies pulled into the node_modules folder. These are what makes the javascript ecosystem so powerful, but also what makes it so frustrating at times.

With that many external dependencies something is bound to go wrong eventually. This is the lived experience I've had with many web projects in React or Angular. Make a web app, let it sit untouched for two years, come back to it to do a one line change, and you'll probably spend a few hours just getting it to run again.

Also, I just feel uncomfortable with that much unknowable code being included into the build. I want to choose my dependencies more carefully. But I also don't want to give up the fine development experience all these tools are buying me. Can't I have my cake and eat it too?

## The challenge

The Preact project has a nice path laid out for a much lighter weight way of building web apps:

1. Start with Preact itself using the [no build tools route](https://preactjs.com/guide/v10/getting-started/#no-build-tools-route)
2. Use [htm](https://github.com/developit/htm) as an in-browser alternative to JSX
3. Use a [hash router](https://jsfiddle.net/developit/gLyL6rbn/) to do app routing in a static web page

Seeing this solution I started wondering: how far can you take this approach?

Could this be used to bring Create React App to the browser using a no build tools approach?

How much could be brought over? Could this be a nice development experience?

## The result

The result of this thought exercise is this project.

So how far did we get?

| Measurement | Create React App | Create React App Zero |
|-------------|------------------|-----------------------|
| FCP         | 1.2s             | 1.7s                  |
| LCP         | 1.5s             | 2.0s                  |
| Page weight | 142kb            | 144kb                 |
| Lighthouse  | 100%             | 99%                   |

Not bad, don't you agree?
