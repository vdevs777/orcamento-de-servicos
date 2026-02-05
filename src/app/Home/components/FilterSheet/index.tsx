import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { Separator } from "@/components/Separator";
import { RadioGroup } from "@/components/RadioGroup";
import { StatusBadge } from "@/components/StatusBadge";
import { getOrderingLabel, Ordering } from "@/types/enums/ordering";
import { Status } from "@/types/enums/status";
import { typography } from "@/theme/typography";
import { Button } from "@/components/Button";
import { CheckboxGroup } from "@/components/CheckboxGroup";

type FilterSheetProps = {
  onFilter: (selectedOrdering?: Ordering, selectedStatus?: Status[]) => void;
};

export const FilterSheet = forwardRef<BottomSheet, FilterSheetProps>(
  ({ onFilter }, ref) => {
    const [selectedOrdering, setSelectOrdering] = useState<string>();
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

    const orders = Object.values(Ordering).map((ordering) => ({
      value: ordering,
      label: getOrderingLabel(ordering),
    }));

    const status = Object.values(Status).map((status) => ({
      value: status,
      label: <StatusBadge status={status} />,
    }));

    function handleResetFilters() {
      setSelectOrdering(undefined);
      setSelectedStatus([]);
    }

    const snapPoints = useMemo(() => ["1%", "70%"], []);

    const bottomSheetRef = useRef<BottomSheetMethods>(null);

    useImperativeHandle(ref, () => bottomSheetRef.current!, []);

    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        handleComponent={null}
        enablePanDownToClose
        backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
      >
        <BottomSheetView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Filtrar e ordenar</Text>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => bottomSheetRef.current?.close()}
            >
              <MaterialIcons name="close" size={24} color={colors.gray[600]} />
            </TouchableOpacity>
          </View>
          <Separator color={colors.gray[300]} />
          <View style={styles.content}>
            <View style={{ gap: 16 }}>
              <Text style={[typography.text.xs, { color: colors.gray[500] }]}>
                Status
              </Text>
              <RadioGroup
                onChange={setSelectOrdering}
                selectedValue={selectedOrdering}
                items={orders}
              />
            </View>
            <View style={{ gap: 16 }}>
              <Text style={[typography.text.xs, { color: colors.gray[500] }]}>
                Ordenação
              </Text>
              <CheckboxGroup
                onChange={setSelectedStatus}
                selectedValues={selectedStatus}
                items={status}
              />
            </View>
          </View>
          <Separator color={colors.gray[300]} />
          <View style={styles.actions}>
            <Button
              text="Resetar filtros"
              variant="secondary"
              onPress={handleResetFilters}
            />
            <Button
              text="Aplicar"
              icon="check"
              // @ts-ignore
              onPress={() => onFilter(selectedOrdering, selectedStatus)}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

FilterSheet.displayName = "FilterSheet";
