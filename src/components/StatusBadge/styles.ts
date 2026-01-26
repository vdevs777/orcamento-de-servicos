import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 8,
    borderRadius: 14,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 9999,
  },

  text: typography.title.xs,
});
