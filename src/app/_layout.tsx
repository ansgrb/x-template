import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import "../../global.css";
import { Stack } from "expo-router";
import { useColorScheme } from "../../hooks/useColorScheme";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style='auto' />
        <Stack
          screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
        >
          <Stack.Screen
            name='index'
            options={{ headerShown: true, headerTitle: "Home" }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
