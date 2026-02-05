import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Status } from "@/types/enums/status";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { typography } from "@/theme/typography";
import { Separator } from "@/components/Separator";
import { BudgetViewCard } from "./components/BudgetViewCard";
import { CreateBudgetCard } from "@/components/CreateBudgetCard";
import { BudgetServiceCard } from "@/components/BudgetServiceCard";
import { Button } from "@/components/Button";
import { Currency } from "@/components/Currency";

export function BudgetView() {
  return (
    <View style={{ flex: 1 }}>
      <PageHeader
        title="Orçamento #12345"
        extra={<StatusBadge status={Status.APPROVED} />}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <BudgetViewCard
          icon="store"
          topContent={
            <Text
              style={[
                typography.title.lg,
                { color: colors.gray[700], maxWidth: "80%" },
              ]}
            >
              Desenvolvimento de aplicativo de loja online
            </Text>
          }
          bottomContent={
            <View style={{ padding: 16, gap: 16 }}>
              <View style={{ gap: 8 }}>
                <Text style={[typography.text.xs, { color: colors.gray[600] }]}>
                  Cliente
                </Text>
                <Text style={[typography.text.sm, { color: colors.gray[700] }]}>
                  Soluções Tecnológicas Beta
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ gap: 8, flex: 1 }}>
                  <Text
                    style={[typography.text.xs, { color: colors.gray[600] }]}
                  >
                    Criado em
                  </Text>
                  <Text
                    style={[typography.text.sm, { color: colors.gray[700] }]}
                  >
                    22/08/2024
                  </Text>
                </View>
                <View style={{ gap: 8, flex: 1 }}>
                  <Text
                    style={[typography.text.xs, { color: colors.gray[600] }]}
                  >
                    Atualizado em
                  </Text>
                  <Text
                    style={[typography.text.sm, { color: colors.gray[700] }]}
                  >
                    26/08/2024
                  </Text>
                </View>
              </View>
            </View>
          }
        />
        <CreateBudgetCard
          title="Serviços inclusos"
          icon="assignment"
          content={
            <View style={{ gap: 16 }}>
              <BudgetServiceCard />
              <BudgetServiceCard />
            </View>
          }
        />
        <BudgetViewCard
          icon="credit-card"
          topContent={
            <View style={{ gap: 8 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "93%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[
                    typography.text.sm,
                    { color: colors.gray[600], flex: 1 },
                  ]}
                >
                  Subtotal
                </Text>
                <Text
                  style={[
                    typography.title.xs,
                    {
                      color: colors.gray[600],
                      textDecorationLine: "line-through",
                    },
                  ]}
                >
                  R$ 4.050,00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "93%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[
                    typography.text.sm,
                    { color: colors.gray[600], flex: 1 },
                  ]}
                >
                  Desconto
                </Text>
                <Text
                  style={[
                    typography.title.xs,
                    {
                      color: colors.success.dark,
                    },
                  ]}
                >
                  - R$ 200,00
                </Text>
              </View>
              <View style={{ marginVertical: 8 }}>
                <Separator color={colors.gray[300]} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "93%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    typography.title.sm,
                    { color: colors.gray[700], flex: 1 },
                  ]}
                >
                  Subtotal
                </Text>
                <Currency value={3847.5} valueStyle={typography.title.lg} />
              </View>
            </View>
          }
        />
      </ScrollView>
      <View style={styles.actions}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Button variant="danger" icon="delete-outline" />
          <Button variant="secondary" icon="content-copy" />
          <Button variant="secondary" icon="edit" />
        </View>
        <Button text="Compartilhar" icon="send" />
      </View>
    </View>
  );
}
