import { SafeAreaView } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/core/theme/theme";

import { Box } from "./src/core/components/Box";
import FeedScreen from "./src/features/Feed/screens/FeedScreen";
import AnalyzingScreen from "./src/features/Analysis/screens/AnalyzingScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "black",
          justifyContent: "space-around",
          paddingVertical: 80,
        }}
      >
        <Box
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          height="auto"
        >
          <FeedScreen />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
