import {
  backgroundColor,
  BackgroundColorProps,
  BorderProps,
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle,
} from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Theme } from "../theme/theme";
import { Box } from "./Box";
import { Text } from "./Text";

const restyleFunctions = composeRestyleFunctions([spacing, backgroundColor]);

type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label: string;
  };

export const Button = ({
  onPress,
  label,
  ...rest
}: Props): React.JSX.Element => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        {...props}
        borderRadius={8}
        height={40}
        backgroundColor="primaryColor"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="buttonLabel" color="primaryTextColor">
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
