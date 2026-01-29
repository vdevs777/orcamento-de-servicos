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
import { Input } from "@/components/Input";
import { NumberInput } from "@/components/Input/NumberInput";

export const ServiceSheet = forwardRef<BottomSheet, {}>((_, ref) => {
  const [quantity, setQuantity] = useState(1);
  const snapPoints = useMemo(() => ["1%", "52%"], []);

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
          <Text style={styles.title}>Serviço</Text>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <MaterialIcons name="close" size={24} color={colors.gray[600]} />
          </TouchableOpacity>
        </View>
        <Separator color={colors.gray[300]} />
        <View style={styles.content}>
          <Input placeholder="Nome do serviço" />
          <Input
            placeholder="Descrição"
            containerStyle={{ borderRadius: 16, height: 120 }}
            multiline
          />
          <View style={{ gap: 6, flexDirection: "row" }}>
            <Input decorator="R$" keyboardType="numbers-and-punctuation" />

            <NumberInput value={quantity} onChange={setQuantity} min={1} />
          </View>
        </View>
        <Separator color={colors.gray[300]} />
        <View style={styles.actions}>
          <Button variant="danger" icon="delete-outline" />
          <Button text="Salvar" icon="check" />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});
