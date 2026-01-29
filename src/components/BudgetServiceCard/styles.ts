import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleAndDescriptionContainer: {
    gap: 4,
  },
  title: {
    ...typography.title.sm,
    color: colors.gray[700],
  },
  description: {
    ...typography.text.xs,
    color: colors.gray[500],
  },
  valuesAndActionsContainer: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  valueAndQuantityContainer: {
    alignItems: "flex-end",
    gap: 4,
  },
  quantity: {
    ...typography.text.xs,
    color: colors.gray[600],
  },
});
