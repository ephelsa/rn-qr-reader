import React from "react";
import { BackgroundColorProps } from "@shopify/restyle";

import { Theme } from "../../../core/theme/theme";
import { Box } from "../../../core/components/Box";
import { Text } from "../../../core/components/Text";

type Props = {
  title: string;
} & BackgroundColorProps<Theme>;

const Header = ({
  title,
}: React.PropsWithChildren<Props>): React.JSX.Element => {
  return (
    <Box
      width="100%"
      height="auto"
      paddingHorizontal="s"
      paddingVertical="l"
      alignItems="center"
    >
      <Text variant="header">{title}</Text>
    </Box>
  );
};

export default Header;
