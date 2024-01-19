"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extensions = void 0;
class Extensions {
    static init() {
        require('./Array');
        require('./Bigint');
        require('./Boolean');
        require('./Generator');
        require('./Map');
        require('./Number');
        require('./Object');
        require('./Set');
        require('./String');
    }
}
exports.Extensions = Extensions;
