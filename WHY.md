# Why Create React App Zero

I love [Create React App](https://create-react-app.dev/)! It has made building a single page web app with React very easy.

But.

## The problem

Let's run it:

```sh
> npx create-react-app@4.0.3 my-app

Creating a new React app in /.../my-app.
[...]
Happy hacking!

> du -sh my-app

328M    my-app
```

328 megabytes! For a hello world app!

Why is that?

Randall Munroe as always [sums it up succinctly](https://xkcd.com/2347/):

![Dependency](https://imgs.xkcd.com/comics/dependency.png)

What causes this incredible size are all the external dependencies pulled into the node_modules folder. These are what makes the javascript ecosystem so powerful, but also what makes it so frustrating at times.

With that many external dependencies something is bound to go wrong eventually. This is the lived experience I've had with many web projects in React or Angular. Make a web app, let it sit untouched for two years, come back to it to do a one line change, and you'll probably spend a few hours just getting it to run again.

Also, I just feel uncomfortable with that much unknowable code being included into the build. I want to choose my dependencies more carefully. But I also don't want to give up the fine development experience all these tools are buying me. Can't I have my cake and eat it too? Or is the cake always a lie?

## The insight

Checking out the preact project I discovered the path laid out by others for using preact without build tools:

1. Start with preact itself using the [no build tools route](https://preactjs.com/guide/v10/getting-started/#no-build-tools-route)
2. Use [htm](https://github.com/developit/htm) as an in-browser alternative to JSX
3. Use a [hash router](https://jsfiddle.net/developit/gLyL6rbn/) to do app routing in a static web page

## The challenge

Seeing this solution I started wondering: how far can you take this approach?

Could this be used to bring Create React App to the browser using a no build tools approach?

How much could be brought over? Could this be a nice development experience?

The result of this thought exercise is this project. I will let you be the judge.
