// Home.tsx
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Header } from "./components/Header";
import { Separator } from "@/components/Separator";
import { colors } from "@/theme/colors";
import { Filters } from "./components/Filters";
import { BudgetCard } from "./components/BudgetCard";
import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { FilterSheet } from "./components/FilterSheet";
import { Status } from "@/types/enums/status";
import { BudgetModel, budgetStorage } from "@/storage/budget-storage";
import { typography } from "@/theme/typography";
import { Ordering } from "@/types/enums/ordering";

export function Home() {
  const [allBudgets, setAllBudgets] = useState<BudgetModel[]>([]);
  const [budgets, setBudgets] = useState<BudgetModel[]>([]);

  const [isLoadingBudgets, setIsLoadingBudgets] = useState(false);

  const filterSheetRef = useRef<BottomSheet>(null);

  const handleOpenFilters = () => {
    filterSheetRef.current?.expand();
  };

  async function handleFilter(
    selectedOrdering?: Ordering,
    selectedStatus?: Status[],
  ) {
    filterSheetRef.current?.close();
    if (!selectedOrdering && selectedStatus?.length === 0) {
      await fetch();
    } else {
      await fetchWithFilters(selectedStatus, selectedOrdering);
    }
  }

  async function fetch() {
    setIsLoadingBudgets(true);
    try {
      const budgets = await budgetStorage.get();
      setAllBudgets(budgets);
      setBudgets(budgets);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoadingBudgets(false);
    }
  }

  async function fetchWithFilters(
    selectedStatus?: Status[],
    selectedOrdering?: Ordering,
  ) {
    setIsLoadingBudgets(true);
    try {
      const budgets = await budgetStorage.getByStatusAndOrdering({
        ordering: selectedOrdering,
        statuses: selectedStatus,
      });
      setBudgets(budgets);
      setAllBudgets(budgets);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoadingBudgets(false);
    }
  }

  function handleType(value: string) {
    if (!value.trim()) {
      setBudgets(allBudgets);
      return;
    }

    const search = value.toLowerCase();

    const filtered = allBudgets.filter(
      (budget) =>
        budget.title.toLowerCase().includes(search) ||
        budget.customer.toLowerCase().includes(search),
    );

    setBudgets(filtered);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, gap: 10 }}>
        <Header />
        <Separator color={colors.gray[300]} />
        <View style={{ padding: 20, gap: 20, width: "100%" }}>
          <Filters onOpenFilters={handleOpenFilters} onType={handleType} />
          {isLoadingBudgets ? (
            <ActivityIndicator
              style={{ paddingTop: 24 }}
              size="large"
              color={colors.purple.base}
            />
          ) : (
            <FlatList
              data={budgets}
              ListEmptyComponent={
                <Text
                  style={[
                    typography.text.md,
                    {
                      color: colors.gray[400],
                      textAlign: "center",
                      paddingTop: 24,
                    },
                  ]}
                >
                  Nenhum orçamento cadastrado.
                </Text>
              }
              renderItem={({ item }) => (
                <BudgetCard
                  data={{
                    title: item.title,
                    customer: item.customer,
                    value: item.totalValue,
                    status: item.status,
                  }}
                />
              )}
            />
          )}
        </View>
      </View>
      <FilterSheet ref={filterSheetRef} onFilter={handleFilter} />
    </View>
  );
}
