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
    pressable: { width: 24, height: 24, borderRadius: 9999 },
    selectedPressable: { borderWidth: 8, borderColor: colors.purple.base },
    unselectedPressable: { borderColor: colors.gray[400], borderWidth: 2 },
    label: { ...typography.text.md, color: colors.gray[600] },
  });
