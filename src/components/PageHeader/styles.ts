import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
  main: { flexDirection: "row", alignItems: "center", gap: 12 },
  title: { ...typography.title.sm, color: colors.gray[700] },
});
