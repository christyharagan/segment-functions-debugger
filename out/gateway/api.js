"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as s from './schema'
const request_1 = require("./request");
var FunctionSettingType;
(function (FunctionSettingType) {
    FunctionSettingType["Array"] = "ARRAY";
    FunctionSettingType["Boolean"] = "BOOLEAN";
    FunctionSettingType["Map"] = "MAP";
    FunctionSettingType["String"] = "STRING";
})(FunctionSettingType = exports.FunctionSettingType || (exports.FunctionSettingType = {}));
var FunctionType;
(function (FunctionType) {
    FunctionType["Destination"] = "DESTINATION";
    FunctionType["Source"] = "SOURCE";
})(FunctionType = exports.FunctionType || (exports.FunctionType = {}));
async function createFunction(jwt_token, args) {
    return await request_1.request(jwt_token, `mutation RunCreateFunction($workspaceId: String!, $input: CreateFunctionInput!) {
  createFunction(workspaceId: $workspaceId, input: $input) {
    id
    
    
  }
}
`, args, 'createFunction');
}
exports.createFunction = createFunction;
async function updateFunction(jwt_token, args) {
    return await request_1.request(jwt_token, `mutation RunUpdateFunction($workspaceId: String!, $functionId: String!, $input: UpdateFunctionInput!) {
  updateFunction(workspaceId: $workspaceId, functionId: $functionId, input: $input) {
    id
    
    
  }
}
`, args, 'updateFunction');
}
exports.updateFunction = updateFunction;
//# sourceMappingURL=api.js.map