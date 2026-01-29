// Home.tsx
import { View } from "react-native";
import { Header } from "./components/Header";
import { Separator } from "@/components/Separator";
import { colors } from "@/theme/colors";
import { Filters } from "./components/Filters";
import { BudgetCard } from "./components/BudgetCard";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { FilterSheet } from "./components/FilterSheet";
import { Status } from "@/types/enums/status";

export function Home() {
  const filterSheetRef = useRef<BottomSheet>(null);

  const handleOpenFilters = () => {
    filterSheetRef.current?.expand();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, gap: 10 }}>
        <Header />
        <Separator color={colors.gray[300]} />
        <View style={{ padding: 20, gap: 20, width: "100%" }}>
          <Filters onOpenFilters={handleOpenFilters} />
          {/* TROCAR PARA FLAT LIST POSTERIORMENTE */}
          <View>
            <BudgetCard
              data={{
                title: "Desenvolvimento de aplicativo de loja online",
                customer: "Soluções Tecnológicas Beta",
                value: 22300,
                status: Status.APPROVED,
              }}
            />
          </View>
        </View>
      </View>
      <FilterSheet ref={filterSheetRef} />
    </View>
  );
}
