import React from "react";
import { Box } from "../../../core/components/Box";
import { Text } from "../../../core/components/Text";

const EmptyQRInZone = (): React.JSX.Element => {
  return (
    <Box
      width="100%"
      alignItems="center"
      justifyContent="center"
      height="100%"
      paddingHorizontal="l"
    >
      <Text variant="subtitle" textAlign="center">
        Looks like you don't have any QR reported in your zone.
      </Text>
    </Box>
  );
};

export default EmptyQRInZone;
