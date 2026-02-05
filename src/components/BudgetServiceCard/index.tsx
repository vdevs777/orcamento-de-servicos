import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { truncateText } from "@/utils/string";
import { Currency } from "@/components/Currency";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";

export function BudgetServiceCard({
  editable = false,
}: {
  editable?: boolean;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndDescriptionContainer}>
        <Text style={styles.title}>Design de interfaces</Text>
        <Text style={styles.description}>
          {truncateText(
            "Criação de wireframes e protótipos de alta fidelidade",
            31,
          )}
        </Text>
      </View>
      <View style={styles.valuesAndActionsContainer}>
        <View style={styles.valueAndQuantityContainer}>
          <Currency value={1021.22} />
          <Text style={styles.quantity}>Qt: 1</Text>
        </View>
        {editable && (
          <Pressable>
            <MaterialIcons name="edit" size={20} color={colors.purple.base} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
