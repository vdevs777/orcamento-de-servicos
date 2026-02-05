import { ScrollView, Text, View } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { CreateBudgetCard } from "@/components/CreateBudgetCard";
import { Button } from "@/components/Button";

import { MainInfo } from "./components/MainInfo";

import { styles } from "./styles";
import { RadioGroup } from "@/components/RadioGroup";
import { Status, STATUS_CONFIG } from "@/types/enums/status";
import { StatusBadge } from "@/components/StatusBadge";
import { useRef, useState } from "react";
import { BudgetServiceCard } from "@/components/BudgetServiceCard";
import { IncludedServices } from "./components/IncludedServices";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { Currency } from "@/components/Currency";
import { Input } from "@/components/Input";
import { Investment } from "./components/Investment";
import { ServiceSchema, ServiceSheet } from "./components/ServiceSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { FilterSheet } from "@/app/Home/components/FilterSheet";
import { ServiceModel } from "@/storage/budget-storage";
import { v4 as uuid } from "uuid";

export function BudgetCreate() {
  const [selectedStatus, setSelectedStatus] = useState("");

  const [services, setServices] = useState<ServiceModel[]>([]);

  const serviceSheetRef = useRef<BottomSheet>(null);

  const handleOpenService = () => {
    serviceSheetRef.current?.expand();
  };

  function onAddService(data: ServiceSchema) {
    setServices((prev) => [...prev, { id: uuid(), ...data }]);
    console.log(services);
  }

  const status = Object.values(Status).map((status) => ({
    value: status,
    label: <StatusBadge status={status} />,
  }));

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <PageHeader title="Orçamento" />

        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <MainInfo />
          <CreateBudgetCard
            title="Status"
            icon="sell"
            content={
              <RadioGroup
                items={status}
                onChange={setSelectedStatus}
                selectedValue={selectedStatus}
                style={{ flexDirection: "row", flexWrap: "wrap" }}
                itemWidth="40%"
              />
            }
          />
          <IncludedServices onAddService={handleOpenService} />
          <Investment />
          <View style={{ height: 120 }} />
        </ScrollView>

        <View style={styles.actions}>
          <Button variant="secondary" text="Cancelar" />
          <Button icon="check" text="Salvar" />
        </View>
      </View>
      <ServiceSheet ref={serviceSheetRef} onSubmit={onAddService} />
    </View>
  );
}
