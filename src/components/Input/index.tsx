import { useState } from "react";
import { View, TextInput, Text, TextInputProps } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type InputProps = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  decorator?: string;
  error?: boolean;
};

export function Input({ icon, decorator, error, style, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const iconColor = error
    ? colors.danger.base
    : isFocused
      ? colors.purple.base
      : colors.gray[500];

  return (
    <View
      style={[
        styles.container,
        error ? styles.errorContainer : isFocused && styles.containerFocused,
      ]}
    >
      {icon && (
        <MaterialIcons
          name={icon}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      )}

      {decorator && (
        <Text
          style={[styles.decorator, error && { color: colors.danger.base }]}
        >
          {decorator}
        </Text>
      )}

      <TextInput
        style={[styles.input, error && { color: colors.danger.base }, style]}
        cursorColor={error ? colors.danger.base : colors.purple.base}
        selectionColor={error ? colors.danger.base : colors.purple.base}
        placeholderTextColor={colors.gray[400]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </View>
  );
}
