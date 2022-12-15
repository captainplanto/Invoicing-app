import { createTheme, NextUIProvider, theme } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      //  background: "red!important",
      //  backgroundAlpha: "red!important", // used for semi-transparent backgrounds like the navbar
      //  foreground: "red!important",
      //  backgroundContrast: "red!important",
    }, // optional
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: { backgroundColor: "red!important", background: "green!important" },
  },
});
