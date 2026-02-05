import { Separator } from "@/components/Separator";
import { colors } from "@/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
};

export function BudgetViewCard({ icon, topContent, bottomContent }: Props) {
  return (
    <View
      style={{
        width: "100%",
        gap: 0,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: colors.gray[300],
        backgroundColor: colors.gray[100],
      }}
    >
      <View style={{ flexDirection: "row", gap: 12, padding: 16 }}>
        <View
          style={{
            width: 36,
            height: 36,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            backgroundColor: colors.purple.light,
          }}
        >
          <MaterialIcons name={icon} size={20} color={colors.purple.base} />
        </View>
        {topContent}
      </View>
      {bottomContent && <Separator color={colors.gray[300]} />}
      {bottomContent}
    </View>
  );
}
