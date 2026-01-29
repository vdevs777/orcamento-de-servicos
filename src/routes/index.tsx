import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white", // cor padrão do app
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
}
