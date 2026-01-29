import { CreateBudgetCard } from "@/components/CreateBudgetCard";
import { Currency } from "@/components/Currency";
import { Input } from "@/components/Input";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { Text, View } from "react-native";

export function Investment() {
  return (
    <CreateBudgetCard
      title="Investimento"
      icon="attach-money"
      content={
        <View style={{ gap: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={[typography.text.sm, { color: colors.gray[700] }]}>
              Subtotal
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text style={[typography.text.xs, { color: colors.gray[500] }]}>
                8 itens
              </Text>
              <Currency value={3847.5} valueStyle={typography.text.sm} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                width: 180,
              }}
            >
              <Text style={[typography.text.sm, { color: colors.gray[700] }]}>
                Desconto (%)
              </Text>
              <Input containerStyle={{ height: 32 }} style={{ width: 30 }} />
            </View>

            <Currency
              value={347.5}
              valueStyle={{
                ...typography.text.sm,
                color: colors.danger.base,
              }}
              symbolStyle={{
                color: colors.danger.base,
              }}
              negative
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[typography.title.sm, { color: colors.gray[700] }]}>
              Valor total
            </Text>
            <View style={{ gap: 8, alignItems: "flex-end" }}>
              <Text
                style={[
                  typography.text.xs,
                  {
                    color: colors.gray[600],
                    textDecorationLine: "line-through",
                  },
                ]}
              >
                R$ 4.050,00
              </Text>
              <Currency value={3847.5} />
            </View>
          </View>
        </View>
      }
    />
  );
}
