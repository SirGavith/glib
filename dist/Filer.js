"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filer = void 0;
const fs_1 = __importDefault(require("fs"));
class Filer {
    static ReadFile(localpath) {
        return Filer.ReadAllLines(localpath).join('\n');
    }
    static ReadAllLines(localpath) {
        let lines = fs_1.default.readFileSync(localpath, 'utf8')
            .replaceAll('\r', '')
            .split('\n')
            .filter(l => !l.startsWith('//'));
        // .map(l => l.trim())
        if (lines.at(-1) === '')
            lines = lines.slice(0, -1);
        return lines;
    }
    static WriteFile(localpath, data) {
        fs_1.default.writeFileSync(localpath, data);
    }
    static WriteJSON(localpath, data) {
        fs_1.default.writeFileSync(localpath, JSON.stringify(data));
    }
    static ReadJson(localpath) {
        return JSON.parse(fs_1.default.readFileSync(localpath, 'utf8'));
    }
}
exports.Filer = Filer;
