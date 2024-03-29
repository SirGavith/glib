"use strict";
//https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
Object.defineProperty(exports, "__esModule", { value: true });
exports.println = exports.print = exports.BgWhite = exports.BgCyan = exports.BgMagenta = exports.BgBlue = exports.BgYellow = exports.BgGreen = exports.BgRed = exports.BgBlack = exports.White = exports.Cyan = exports.Magenta = exports.Blue = exports.Yellow = exports.Green = exports.Red = exports.Black = exports.Hidden = exports.Reverse = exports.Blink = exports.Underscore = exports.Dim = exports.Bright = exports.Reset = void 0;
exports.Reset = "\x1b[0m";
exports.Bright = "\x1b[1m";
exports.Dim = "\x1b[2m";
exports.Underscore = "\x1b[4m";
exports.Blink = "\x1b[5m";
exports.Reverse = "\x1b[7m";
exports.Hidden = "\x1b[8m";
exports.Black = "\x1b[30m";
exports.Red = "\x1b[31m";
exports.Green = "\x1b[32m";
exports.Yellow = "\x1b[33m";
exports.Blue = "\x1b[34m";
exports.Magenta = "\x1b[35m";
exports.Cyan = "\x1b[36m";
exports.White = "\x1b[37m";
exports.BgBlack = "\x1b[40m";
exports.BgRed = "\x1b[41m";
exports.BgGreen = "\x1b[42m";
exports.BgYellow = "\x1b[43m";
exports.BgBlue = "\x1b[44m";
exports.BgMagenta = "\x1b[45m";
exports.BgCyan = "\x1b[46m";
exports.BgWhite = "\x1b[47m";
function print(s) {
    process.stdout.write(s);
}
exports.print = print;
function println(s) {
    process.stdout.write(s + '\n');
}
exports.println = println;
