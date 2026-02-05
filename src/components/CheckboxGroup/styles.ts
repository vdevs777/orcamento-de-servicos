import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { DimensionValue, StyleSheet } from "react-native";

export const getStyles = (itemWidth: DimensionValue = "100%") =>
  StyleSheet.create({
    container: {
      gap: 16,
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      width: itemWidth,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    checked: {
      backgroundColor: colors.purple.base,
      borderColor: colors.purple.base,
      borderWidth: 2,
    },
    unchecked: {
      borderColor: colors.gray[400],
      borderWidth: 2,
    },
    checkMark: {
      color: "white",
      fontSize: 14,
      fontWeight: "700",
      lineHeight: 14,
    },
    label: {
      ...typography.text.md,
      color: colors.gray[600],
    },
  });
