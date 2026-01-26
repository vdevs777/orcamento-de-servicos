import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";

type Status = "sent" | "draft" | "approved" | "rejected";

type StatusBadgeProps = {
  status: Status;
};

const STATUS_CONFIG: Record<
  Status,
  {
    label: string;
    background: string;
    foreground: string;
  }
> = {
  sent: {
    label: "Enviado",
    background: colors.info.light,
    foreground: colors.info.dark,
  },
  draft: {
    label: "Rascunho",
    background: colors.gray[200],
    foreground: colors.gray[500],
  },
  approved: {
    label: "Aprovado",
    background: colors.success.light,
    foreground: colors.success.dark,
  },
  rejected: {
    label: "Recusado",
    background: colors.danger.light,
    foreground: colors.danger.dark,
  },
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
