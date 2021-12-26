(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  pretty: (con) => {

    con.pretty = (...args) => {
      let optionsArgumentIndex = [...args].length


      const options = [...args][optionsArgumentIndex - 1] ?? {}
      const firstArg = [...args][0] ?? {}

      const styling = {
        "default": `background: white; color:green; box-shadow: inset  5em 1em gold;border:  ${options?.borderSize ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
        "border": `box-shadow: inset  5em 1em gold;border:  ${options?.borderSize ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
        "color": `color:${options?.color};`,
        "background": `background: ${options?.background};`,
        "fontSize": ` font-size: ${options.fontSize ?? "25px"}; `,
        "image": ` font-size: ${options.fontSize ?? "100px"};  background: url('${options?.image}')  no-repeat center; background-size: 100vh auto; padding:500px");`
      }
      let style = ""
      for (let key in options) {
        if (key === "border" && options.border === false) {
          continue;
        }
        if (styling.hasOwnProperty(key)) {
          style += styling[key]
        }
      }
      let extraArgs = [...args].slice(1, -1)
      console.log(`%c${firstArg}`, style, ...extraArgs);
    }
  },
  blue: (...message) => console.pretty(...message, { background: "#1E88E5",  color: "#90CAF9" }),// createLogger("#1E88E5", "#90CAF9"),
  brown: (...message) => console.pretty(...message, { background: "#6D4C41",  color: "#D7CCC8" }),
  gray: (...message) => console.pretty(...message, { background: "#212121",  color: "#BDBDBD" }),
  green: (...message) => console.pretty(...message, { background: "#388E3C",  color: "#A5D6A7" }),
  red: (...message) => console.pretty(...message, { background: "#E53935",  color: "#EF9A9A" }),
  orange: (...message) => console.pretty(...message, { background: "#F4511E",  color: "#FFAB91" }),
  purple: (...message) => console.pretty(...message, { background: "#8E24AA",  color: "#E1BEE7" }),
  yellow: (...message) => console.pretty(...message, { background: "#FFD600",  color: "#FFF59D" }),
};

const createLogger = (message, color, background) => console.pretty(message, { color: color, background: background })

},{}],2:[function(require,module,exports){
var log = require("../source.js")
var { pretty } = require("../source.js")
pretty(console) 
window.log = log;
},{"../source.js":1}]},{},[2]);
