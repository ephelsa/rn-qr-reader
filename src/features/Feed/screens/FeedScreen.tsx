import React from "react";

import { Box } from "../../../core/components/Box";
import Header from "../components/Header";
import { ScanQRButton } from "../components/ScanQRButton";
import EmptyQRInZone from "../components/EmptyQRInZone";

const FeedScreen = (): React.JSX.Element => {
  return (
    <Box width="100%" height="100%">
      <Header title="QR in your zone" />
      <EmptyQRInZone />
      <Box
        width="100%"
        alignItems="center"
        paddingBottom="l"
        position="absolute"
        bottom={0}
      >
        <ScanQRButton />
      </Box>
    </Box>
  );
};

export default FeedScreen;
