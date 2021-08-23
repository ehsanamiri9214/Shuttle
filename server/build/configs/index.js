"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var config = {
    // ENV: process.env.ENV,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
};
exports.default = config;
