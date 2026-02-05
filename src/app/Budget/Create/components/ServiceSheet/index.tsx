import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Separator } from "@/components/Separator";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { NumberInput } from "@/components/Input/NumberInput";
import { CurrencyInput } from "@/components/CurrencyInput";

import { colors } from "@/theme/colors";
import { styles } from "./styles";

const serviceSchema = z.object({
  title: z.string().min(1, "Informe o nome do serviço"),
  description: z.string(),
  qty: z.number({ error: "Informe um valor válido" }),
  price: z
    .number({ error: "Informe um valor válido" })
    .min(0.01, "Informe um valor válido."),
});

export type ServiceSchema = z.infer<typeof serviceSchema>;

type ServiceScheetProps = {
  onSubmit: (data: ServiceSchema) => void;
};

export const ServiceSheet = forwardRef<BottomSheet, ServiceScheetProps>(
  ({ onSubmit }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { isLoading, errors },
    } = useForm<ServiceSchema>({
      resolver: zodResolver(serviceSchema),
      defaultValues: { qty: 1 },
    });

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
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Nome do serviço"
                  error={!!errors.title}
                  {...field}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Descrição"
                  containerStyle={{ borderRadius: 16, height: 120 }}
                  multiline
                  {...field}
                />
              )}
            />
            <View style={{ gap: 6, flexDirection: "row" }}>
              <Controller
                name="price"
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CurrencyInput
                    value={value}
                    onChangeValue={onChange}
                    onBlur={onBlur}
                    error={!!errors.price}
                    placeholder="Valor (R$)"
                  />
                )}
              />

              <Controller
                name="qty"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <NumberInput value={value} onChange={onChange} min={1} />
                )}
              />
            </View>
          </View>
          <Separator color={colors.gray[300]} />
          <View style={styles.actions}>
            {/* <Button variant="danger" icon="delete-outline" /> */}
            <Button
              text="Salvar"
              icon="check"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  },
);
