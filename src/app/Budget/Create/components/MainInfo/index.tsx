import { CreateBudgetCard } from "@/components/CreateBudgetCard";
import { Input } from "@/components/Input";
import { View } from "react-native";
import { styles } from "./styles";

export function MainInfo() {
  return (
    <CreateBudgetCard
      title="Informações gerais"
      icon="store"
      content={
        <View style={styles.container}>
          <Input placeholder="Título" />
          <Input placeholder="Cliente" />
        </View>
      }
    />
  );
}
