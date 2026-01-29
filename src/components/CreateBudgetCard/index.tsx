import { Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { ReactNode } from "react";

type CreateBudgetCardProps = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  content: ReactNode;
};

export function CreateBudgetCard({
  title,
  icon,
  content,
}: CreateBudgetCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name={icon} ize={16} color={colors.purple.base} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>{content}</View>
    </View>
  );
}
