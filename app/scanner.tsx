import { ThemeProvider } from "@shopify/restyle";
import ScannerScreen from "../src/features/Scanner/screens/ScannerScreen";
import theme from "../src/core/theme/theme";

export default function Scanner() {
  return (
    <ThemeProvider theme={theme}>
      <ScannerScreen />
    </ThemeProvider>
  );
}
