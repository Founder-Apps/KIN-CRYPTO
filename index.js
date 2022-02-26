"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KinSdk = exports.KinEnvironment = void 0;

let KinService =  kinService(KinEnvironment.Test);

var _reactNative = require("react-native");

let KinEnvironment;
exports.KinEnvironment = KinEnvironment;

(function (KinEnvironment) {
  KinEnvironment["Prod"] = "Prod";
  KinEnvironment["Test"] = "Test";
})(KinEnvironment || (exports.KinEnvironment = KinEnvironment = {}));

const {
  KinSdk
} = _reactNative.NativeModules;
exports.KinSdk = KinSdk;
var _default = KinSdk;
exports.default = _default;
//# sourceMappingURL=index.js.map

// In a React Native application
import Parse from "parse/react-native.js";
import (AsyncStorage) , '@react-native-async-storage/async-storage';




//Initializing Kin Service
const kinService = new KinService(KinEnvironment.Test);