import { BudgetServiceCard } from "@/components/BudgetServiceCard";
import { Button } from "@/components/Button";
import { CreateBudgetCard } from "@/components/CreateBudgetCard";
import { View } from "react-native";

type InclduedServicesProps = {
  onAddService: () => void;
};

export function IncludedServices({ onAddService }: InclduedServicesProps) {
  return (
    <CreateBudgetCard
      title="Serviços inclusos"
      icon="assignment"
      content={
        <View style={{ gap: 16 }}>
          <BudgetServiceCard />
          <BudgetServiceCard />
          <Button
            onPress={onAddService}
            text="Adicionar serviço"
            icon="add"
            variant="secondary"
            style={{ width: "100%", justifyContent: "center" }}
          />
        </View>
      }
    />
  );
}
