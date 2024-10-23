import { CameraView } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Overlay } from "../components/Overlay";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function ScannerScreen() {
  const onBarcodeScanned = () => {
    router.back();
  };

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          console.log("[DEBUG] QR content ===>", data);
          onBarcodeScanned();
        }}
      />
      <Overlay />
    </SafeAreaView>
  );
}
