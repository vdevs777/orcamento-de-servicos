import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { StatusBadge } from "@/components/StatusBadge";
import { numberToLocale } from "@/utils/number";
import { Status } from "@/types/enums/status";

type BudgetCardData = {
  title: string;
  customer: string;
  value: number;
  status: Status;
};

type BudgetCardProps = {
  data: BudgetCardData;
};

export function BudgetCard({ data }: BudgetCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.internalContainer}>
        <Text style={styles.title}>{data.title}</Text>

        <StatusBadge status={data.status} />
      </View>
      <View style={styles.internalContainer}>
        <Text style={styles.customer}>{data.customer}</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.value}>
            {numberToLocale(data.value, { minDecimals: 2 })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
