import { BudgetCreate } from "@/app/Budget/Create";
import { BudgetEdit } from "@/app/Budget/Edit";
import { BudgetView } from "@/app/Budget/View";
import { Home } from "@/app/Home";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View } from "react-native";

export type StackRoutesList = {
  home: undefined;
  budgetCreate: undefined;
  budgetView: { id: string };
  budgetEdit: { id: string };
};

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>;

export function StackRoutes() {
  const Stack = createNativeStackNavigator<StackRoutesList>();

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />

      <Stack.Screen name="budgetCreate" component={BudgetCreate} />
      <Stack.Screen name="budgetView" component={BudgetView} />
      <Stack.Screen name="budgetEdit" component={BudgetEdit} />
    </Stack.Navigator>
  );
}
