import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 9,
    minHeight: 32,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
    gap: 8,
  },
  content: { padding: 16 },
  title: { ...typography.text.xs, color: colors.gray[500] },
});
