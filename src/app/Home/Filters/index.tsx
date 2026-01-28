import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

type FiltersProps = {
  onOpenFilters?: () => void;
};

export function Filters({ onOpenFilters }: FiltersProps) {
  return (
    <View style={styles.container}>
      <Input icon="search" placeholder="Título ou cliente" />
      <Button icon="filter-list" variant="secondary" onPress={onOpenFilters} />
    </View>
  );
}
