import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

type FiltersProps = {
  onOpenFilters?: () => void;
  onType?: (value: string) => void;
};

export function Filters({ onOpenFilters, onType }: FiltersProps) {
  return (
    <View style={styles.container}>
      <Input
        icon="search"
        placeholder="Título ou cliente"
        onChangeText={onType}
      />
      <Button icon="filter-list" variant="secondary" onPress={onOpenFilters} />
    </View>
  );
}
