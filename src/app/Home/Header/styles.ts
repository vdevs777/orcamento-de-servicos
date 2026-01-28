import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    gap: 2,
  },
  title: {
    ...typography.title.lg,
    color: colors.purple.base,
  },
  description: {
    ...typography.text.sm,
    color: colors.gray[500],
  },
});
