import React from "react";
import { Box } from "../../../core/components/Box";
import { Text } from "../../../core/components/Text";
import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export const ScanQRButton = (): React.JSX.Element => {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

  const handleScanQR = () => {
    if (!isPermissionGranted) requestPermission();
  };

  return (
    <>
      {isPermissionGranted ? (
        <Link href={"/scanner"} asChild>
          <Pressable>
            <QRButtonContent label="Scan QR" />
          </Pressable>
        </Link>
      ) : (
        <Pressable onPress={handleScanQR}>
          <QRButtonContent label="Request Access to the Camera" />
        </Pressable>
      )}
    </>
  );
};

const QRButtonContent = ({ label }: { label: string }): React.JSX.Element => {
  return (
    <Box
      borderRadius={8}
      height={40}
      paddingHorizontal="s"
      backgroundColor="primaryColor"
      alignItems="center"
      justifyContent="center"
    >
      <Text variant="buttonLabel" color="primaryTextColor">
        {label}
      </Text>
    </Box>
  );
};
