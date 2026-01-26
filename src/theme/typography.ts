export const fontFamily = {
  regular: "Lato_400Regular",
  bold: "Lato_700Bold",
} as const;

export const typography = {
  title: {
    lg: {
      fontSize: 18,
      fontFamily: fontFamily.bold,
    },
    md: {
      fontSize: 16,
      fontFamily: fontFamily.bold,
    },
    sm: {
      fontSize: 14,
      fontFamily: fontFamily.bold,
    },
    xs: {
      fontSize: 12,
      fontFamily: fontFamily.bold,
    },
  },

  text: {
    md: {
      fontSize: 16,
      fontFamily: fontFamily.regular,
    },
    sm: {
      fontSize: 14,
      fontFamily: fontFamily.regular,
    },
    xs: {
      fontSize: 12,
      fontFamily: fontFamily.regular,
    },
  },
} as const;

export type Typography = typeof typography;
