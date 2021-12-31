<div align="center">
  <h1>console.pretty</h1>

  <a href="https://www.emojione.com/emoji/1f3a8">
    <img height="80" width="80" alt="artist palette" src="https://raw.githubusercontent.com/bvaughn/console.pretty/master/other/artist-palette.png" />
  </a>

  <p>Pretty console logging, advance features like bg photos and css</p>
</div>

<hr />

[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![styled with prettier][prettier-badge]][prettier]

## The problem

You're trying to log information, but have a hard time tracking down what the
output means, where it came from, or can't find what you're looking for quickly.

## This solution

Use colors to easily parse through your console.

## Examples
### global version
```js
var { setup } = require("console.pretty");
setup(console) //sets the global console to have "pretty" object aka console.pretty()
console.pretty("I like red...",   {color:"red"})
console.pretty("Dragons","orange",  {fontSize:"40px"})
console.pretty("明我","orange","blue")
console.pretty("Fire the canons! 💣", {fontSize:"40px"})
```
# Photos in the console? wait what!
```js
console.pretty("Join Our Company", {
    border:true,
    color:"brown",
    background:"blue",
    borderSize:"1mm",
    image:"https://emojis.slackmojis.com/emojis/images/1539890226/4845/rickroll.gif?1539890226"
})
```
<img src="assets/2021-12-26-02-05-19.png" height="100" >
```
console.pretty("We're Hiring!",{
  color: "black", 
  image:"https://media.istockphoto.com/photos/abstract-background-green-picture-id621484894?b=1&k=20&m=621484894&s=170667a&w=0&h=N5jh9me3fiSjYCMol3moBu3enlQzNgrwG1GXX5N4uhA="
})
```

<img src="assets/2021-12-26-02-15-21.png" height="100" >
 
 

# Photo with border
```js
console.pretty("We're Hiring!",{ color:"black",  border:true,image:"https://media.istockphoto.com/photos/abstract-background-green-picture-id621484894?b=1&k=20&m=621484894&s=170667a&w=0&h=N5jh9me3fiSjYCMol3moBu3enlQzNgrwG1GXX5N4uhA="})

```
## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```bash
npm install console.pretty
```
### alternatives package managers
#### yarn
```bash
yarn add console.pretty
```
#### pnpm
```bash
pnpm install console.pretty
```
## API

By default, the following colors are available:
- <span style="color:black">black</span> (default)
- <span style="color:silver">silver</span>
- <span style="color:gray">gray</span>
- white
- <span style="color:maroon">maroon</span>
- <span style="color:red">red</span>
- <span style="color:purple">purple</span>
- <span style="color:fuchsia">fuchsia</span>
- <span style="color:green">green</span>
- <span style="color:lime">lime</span>

- <span style="color:olive">olive</span>
- <span style="color:yellow">yellow</span>
- <span style="color:navy">navy</span>
- <span style="color:blue">blue</span>
- <span style="color:teal">teal</span>
- <span style="color:aqua">aqua</span>
- <span style="color:orange">orange</span>
- <span style="color:rebeccapurple">rebeccapurple</span> 
# Color as Arguments
```js
console.pretty("I like red...", "blue", "yellow")
console.pretty("I like red...", "#165873", "#f3ca28")
```
# Color as Arguments, and options object
```js
console.pretty("I like red...", {
  color: "blue",
  background: "yellow",
  fontSize: "100px",
  borderSize: "4", 
  border: true })
```
# Images
### note: the font size has to be huge for the image to be visible
### recommended size: 100px +
```js
console.pretty("Never...", {
    color: "blue",
    background: "yellow",
    fontSize: "100px",
    borderSize: "4",
    border: true,
    image: "https://emojis.slackmojis.com/emojis/images/1539890226/4845/rickroll.gif?1539890226"
})
```
# Options Style
```js
console.pretty("black",        {color:"black"})
console.pretty("silver",       {color:"silver"})
console.pretty("gray",         {color:"gray"}) 
console.pretty("rebeccapurple",{color:"rebeccapurple"})
```
##### ["rebeccapurple" for the historically interested](https://css-tricks.com/rebbeccapurple-663399/) also [here](https://lists.w3.org/Archives/Public/www-style/2014Jun/0312.html)   


# Color Loggers
```js
console.blue("blue")
console.brown("brown")
console.gray("gray")
console.green("green")
console.red("red")
console.orange("orange")
console.purple("purple")
console.yellow("yellow")
```

# Maintainer information:

# how to build package from source
```bash
npm install 
npm run build
```
## How to run tests
```bash
npm install -g jest
npm test
```


 -----------------
# Contributors

[![](https://contrib.rocks/image?repo=wisehackermonkey/__templateName__)](https://github.com/wisehackermonkey/__templateName__/graphs/contributors)

##### Made with [contributors-img](https://contrib.rocks).

-----------------
# License

#### MIT © 2018 Brian Vaughn
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 


 
<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/console.pretty.svg?style=flat-square
[package]: https://www.npmjs.com/package/console.pretty
[license-badge]: https://img.shields.io/npm/l/console.pretty.svg?style=flat-square
[license]: https://github.com/bvaughn/console.pretty/blob/master/LICENSE
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier]: https://github.com/prettier/prettier
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
