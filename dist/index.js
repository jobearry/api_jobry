"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = require("./swagger/swaggerOptions");
const user_route_1 = require("./routes/user.route");
const server = (0, express_1.default)();
//middleware
server.use(express_1.default.json());
//setup
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions_1.swaggerOpts);
server.use('/api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
server.use('/', user_route_1.userRouter);
server.listen(swaggerOptions_1.PORT, () => {
    var _a, _b, _c, _d, _e, _f;
    console.log(`Server is running at ${((_c = (_b = (_a = swaggerOptions_1.swaggerOpts.definition) === null || _a === void 0 ? void 0 : _a.servers) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.url) || 'undefined'}`);
    console.log(`Swagger docs available at ${((_f = (_e = (_d = swaggerOptions_1.swaggerOpts.definition) === null || _d === void 0 ? void 0 : _d.servers) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.url) || 'undefined'}/api`);
    // console.log("🚀 ~ swaggerSpec:", JSON.stringify(swaggerSpec, null, 2))
});
