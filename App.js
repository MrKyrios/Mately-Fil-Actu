import React from "react";
import Home from "./app/home";
import { NativeRouter, Route, Routes } from "react-router-native";
import "expo-router/entry";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
}
