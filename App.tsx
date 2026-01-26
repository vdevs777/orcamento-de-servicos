import React from "react";

import { Text, TextInput, View } from "react-native";

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { Loading } from "@/components/Loading";

import { Routes } from "@/routes";

export default function App() {
  const [isFontLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!isFontLoaded) {
    return <Loading />;
  }
  return <Routes />;
}
