import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  variant: "primary" | "secondary" | "danger";
  icon?: keyof typeof MaterialIcons.glyphMap;
  text?: string;
};

export function Button({ variant, icon, text, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          padding: 12,
          borderRadius: 9999,
          alignSelf: "flex-start",
          backgroundColor:
            variant === "primary" ? colors.purple.base : colors.gray[100],
          borderWidth: 1.25,
          borderColor:
            variant === "primary" ? colors.purple.base : colors.gray[300],
          flexDirection: "row",
          alignItems: "center",
          gap: text ? 8 : 0,
        },
        style,
      ]}
      {...rest}
      activeOpacity={0.8}
    >
      <MaterialIcons
        name={icon}
        size={18}
        style={{
          color:
            variant === "primary"
              ? colors.gray[100]
              : variant === "danger"
                ? colors.danger.base
                : colors.purple.base,
        }}
      />
      <Text
        style={[
          typography.title.sm,
          {
            color:
              variant === "primary"
                ? colors.gray[100]
                : variant === "danger"
                  ? colors.danger.base
                  : colors.purple.base,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
