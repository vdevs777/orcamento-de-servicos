import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";
import { Status, STATUS_CONFIG } from "@/types/enums/status";

type StatusBadgeProps = {
  status: Status;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <View style={[styles.container, { backgroundColor: config.background }]}>
      <View style={[styles.dot, { backgroundColor: config.foreground }]} />

      <Text style={[styles.text, { color: config.foreground }]}>
        {config.label}
      </Text>
    </View>
  );
}
