(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const cssColors = require("./test/colors.json")

const prettyCore = (...args) => {
  let optionsArgumentIndex = [...args].length
  const options = [...args][optionsArgumentIndex - 1] ?? {}
  const firstArg = [...args][0] ?? {}

  
  if (args.length < 2) {
    return new Error("prettyCore requires at least two arguments")
  }
  
  if (typeof args[0] === "string" && typeof args[1] === "string" && typeof args[2] === "object") {
    let colorArgumentIndex = 1
    let optionsArgumentIndex = 2
    return [`%c${firstArg}`, `${optionsObjectToCSS(options)}`]
  }
  //check if first argument is a string and the second is a valid css color and the third is an valid css color
  if (typeof args[0] === "string" && isValidCssColor(args[1]) && isValidCssColor(args[2])) {
    let colorArgumentIndex = 1
    let backgroundColorArgumentIndex = 2
    return [`%c${firstArg}`, `color: ${args[colorArgumentIndex]};background: ${args[backgroundColorArgumentIndex]};`]
  }
  
  if (typeof args[0] === "string" && typeof args[1] === "object") {

    let extraArgs = [...args].slice(1, -1)
    return [`%c${firstArg}`, optionsObjectToCSS(options), ...extraArgs]
  }
  if (typeof args[0] === "string" && typeof args[1] === "string" && isValidCssColor(args[1])) {
    let colorArgumentIndex = 1
    return [`%c${firstArg}`, `color: ${args[colorArgumentIndex]};`]
  }


}
const optionsObjectToCSS = (options) => {
  const styling = {
    "default": `background: white;color: green;box-shadow: inset  5em 1em gold;border: ${options?.borderSize ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
    "border": `box-shadow: inset  5em 1em gold;border:  ${options?.borderSize ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
    "fontSize": `font-size: ${options.fontSize ?? "25px"};`,
    "image": `font-size: ${options.fontSize ?? "100px"};  background: url('${options?.image}')  no-repeat center; background-size: 100vh auto; padding:500px");`
  }
  if (options === {}) {
    return ""
  }
  let style = ""
  for (let key in options) {
    if (key === "border" && options.border === false) {
      continue;
    }
    if (Object.keys(styling).includes(key)) {
      style += styling[key]
      continue
    }
    if (options.hasOwnProperty(key)) {
      style += `${convertCammelCaseToDash(key)}: ${options[key]};`
    }

  }
  return style
}
// 
const convertCammelCaseToDash = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// checks to see if a string is a valid css color
// https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
const isValidCssColor = (color) => {
  if (typeof color !== "string") {
    return false
  }
  if (cssColors.names.includes(color)) {
    return true
  }
  if (color.length !== 7) {
    return false
  }
  if (color[0] !== "#") {
    return false
  }
  if (color.match(/^#[0-9a-fA-F]{6}$/)) {
    return true
  }

  return false
}

const runPrint = (...args) => console.log(...args)
const createLogger = (message, color, background) => console.pretty(message, { color: color, background: background })
module.exports = {

  blue: (...message) => console.pretty(...message, { background: "#1E88E5", color: "#90CAF9" }),// createLogger("#1E88E5", "#90CAF9"),
  brown: (...message) => console.pretty(...message, { background: "#6D4C41", color: "#D7CCC8" }),
  gray: (...message) => console.pretty(...message, { background: "#212121", color: "#BDBDBD" }),
  green: (...message) => console.pretty(...message, { background: "#388E3C", color: "#A5D6A7" }),
  red: (...message) => console.pretty(...message, { background: "#E53935", color: "#EF9A9A" }),
  orange: (...message) => console.pretty(...message, { background: "#F4511E", color: "#FFAB91" }),
  purple: (...message) => console.pretty(...message, { background: "#8E24AA", color: "#E1BEE7" }),
  yellow: (...message) => console.pretty(...message, { background: "#FFD600", color: "#FFF59D" }),
  prettyCore: prettyCore,
  isValidCssColor: isValidCssColor,
  optionsObjectToCSS: optionsObjectToCSS,
  convertCammelCaseToDash: convertCammelCaseToDash,
  pretty: (con) => {

    con.pretty = (...args) => runPrint(prettyCore(...args))
  },
};

},{"./test/colors.json":2}],2:[function(require,module,exports){
module.exports={
    "names": [
        "black",
        "silver",
        "gray",
        "white",
        "maroon",
        "red",
        "purple",
        "fuchsia",
        "green",
        "lime",
        "olive",
        "yellow",
        "navy",
        "blue",
        "teal",
        "aqua",
        "rebeccapurple"
    ],
    "black": {
        "name": "black",
        "hex": "#000000",
        "rgb": "0,0,0"
    },
    "silver": {
        "name": "silver",
        "hex": "#C0C0C0",
        "rgb": "192,192,192"
    },
    "gray": {
        "name": "gray",
        "hex": "#808080",
        "rgb": "128,128,128"
    },
    "white": {
        "name": "white",
        "hex": "#FFFFFF",
        "rgb": "255,255,255"
    },
    "maroon": {
        "name": "maroon",
        "hex": "#800000",
        "rgb": "128,0,0"
    },
    "red": {
        "name": "red",
        "hex": "#FF0000",
        "rgb": "255,0,0"
    },
    "purple": {
        "name": "purple",
        "hex": "#800080",
        "rgb": "128,0,128"
    },
    "fuchsia": {
        "name": "fuchsia",
        "hex": "#FF00FF",
        "rgb": "255,0,255"
    },
    "green": {
        "name": "green",
        "hex": "#008000",
        "rgb": "0,128,0"
    },
    "lime": {
        "name": "lime",
        "hex": "#00FF00",
        "rgb": "0,255,0"
    },
    "olive": {
        "name": "olive",
        "hex": "#808000",
        "rgb": "128,128,0"
    },
    "yellow": {
        "name": "yellow",
        "hex": "#FFFF00",
        "rgb": "255,255,0"
    },
    "navy": {
        "name": "navy",
        "hex": "#000080",
        "rgb": "0,0,128"
    },
    "blue": {
        "name": "blue",
        "hex": "#0000FF",
        "rgb": "0,0,255"
    },
    "teal": {
        "name": "teal",
        "hex": "#008080",
        "rgb": "0,128,128"
    },
    "aqua": {
        "name": "aqua",
        "hex": "#00FFFF",
        "rgb": "0,255,255"
    },
    "rebeccapurple": {
        "name": "rebeccapurple",
        "hex": "#663399",
        "rgb": "102,51,153"
    }
}
},{}]},{},[1]);
