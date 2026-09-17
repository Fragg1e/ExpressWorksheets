"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.get("/ping", async (_req, res) => {
    res.json({
        message: "hello from Una ",
    });
});

app.get("/bananas", async (_req, res) => {
    res.json({
        message: "bruh ",
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
//# sourceMappingURL=app.js.map