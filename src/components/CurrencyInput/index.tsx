import { useState } from "react";
import { View, TextInput, Text, TextInputProps, ViewStyle } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Input, { CurrencyInputProps } from "react-native-currency-input";

type Props = CurrencyInputProps & {
  error?: boolean;
  containerStyle?: ViewStyle;
};

export function CurrencyInput({
  error,
  containerStyle,
  style,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        error ? styles.errorContainer : isFocused && styles.containerFocused,
        rest.multiline && { alignItems: "flex-start", paddingVertical: 12 },
        containerStyle,
      ]}
    >
      <Input
        multiline={rest.multiline}
        textAlignVertical={rest.multiline ? "top" : "center"}
        style={[styles.input, error && { color: colors.danger.base }, style]}
        cursorColor={error ? colors.danger.base : colors.purple.base}
        selectionColor={error ? colors.danger.base : colors.purple.base}
        placeholderTextColor={colors.gray[400]}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          rest.onBlur?.(e);
        }}
        prefix="R$ "
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        {...rest}
      />
    </View>
  );
}
