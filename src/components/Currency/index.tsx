import { Text, View, TextStyle, ViewStyle } from "react-native";
import { numberToLocale } from "@/utils/number";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";

type CurrencyProps = {
  value: number;
  symbolStyle?: TextStyle;
  valueStyle?: TextStyle;
  containerStyle?: ViewStyle;
  negative?: boolean;
};

export function Currency({
  value,
  symbolStyle,
  valueStyle,
  containerStyle,
  negative = false,
}: CurrencyProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          gap: 4,
          alignItems: "baseline",
        },
        containerStyle,
      ]}
    >
      <Text
        style={[
          { ...typography.text.xs, color: colors.gray[700] },
          symbolStyle,
        ]}
      >
        {negative && "- "}
        R$
      </Text>

      <Text
        style={[
          { ...typography.title.md, color: colors.gray[700] },
          valueStyle,
        ]}
      >
        {numberToLocale(value, { minDecimals: 2 })}
      </Text>
    </View>
  );
}
