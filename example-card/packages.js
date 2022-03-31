import * as React from "react";
import * as ReactNative from "react-native";
import * as ReactRedux from "react-redux";
import * as ReactNativeElements from "react-native-elements";
import * as ReactNavigationNative from "@react-navigation/native";
import * as Icons from "react-native-vector-icons";
import * as Database from "./seam-data-layer";
import * as Owners from "./seam-owners-api";
const Packages = {
    "react": () => React,
    "react-native": () => ReactNative,
    "react-redux": () => ReactRedux,
    "react-native-elements": () => ReactNativeElements,
    "@react-navigation/native": () => ReactNavigationNative,
    "react-native-vector-icons": () => Icons,
    "seam-data-layer": () => Database,
    "seam-owners-api": () => Owners
}


const fromPairs = (pairs) => Object.assign({}, ...pairs.map(([k, v]) => ({ [k]: v })));
const AllPackages = fromPairs(
    Object.keys(Packages).map(k => [k, () => ({ exports: Packages[k]() })])
);

export default AllPackages