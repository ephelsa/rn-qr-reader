import { ThemeProvider } from "@shopify/restyle";
import React, { PropsWithChildren } from "react";
import theme from "../theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "./Box";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          height="auto"
        >
          {children}
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
