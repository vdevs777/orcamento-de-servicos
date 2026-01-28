import { colors } from "@/theme/colors";
import { fontFamily, typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray[100],
    borderWidth: 1.25,
    borderColor: colors.gray[300],
    borderRadius: 9999,
    paddingHorizontal: 16,
    minHeight: 48,
    width: "auto",
    flex: 1,
  },
  containerFocused: {
    borderColor: colors.purple.base,
  },
  icon: {
    marginRight: 8,
  },
  errorContainer: {
    borderColor: colors.danger.base,
  },
  errorIcon: {
    color: colors.danger.base,
  },
  decorator: {
    marginRight: 8,
    color: colors.gray[700],
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
  input: {
    ...typography.text.md,
    flex: 1,
    color: colors.gray[700],
    paddingVertical: 0,
    textAlignVertical: "center",
  },
});
