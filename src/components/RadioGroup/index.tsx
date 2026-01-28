import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type RadioGroupItem = {
  label: string | ReactNode;
  value: string;
};

type RadioGroupProps = {
  items: RadioGroupItem[];
  selectedValue?: string;
  onChange: (value: string) => void;
};

export function RadioGroup({
  items,
  selectedValue,
  onChange,
}: RadioGroupProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Pressable
          style={styles.item}
          key={item.value}
          onPress={() => onChange(item.value)}
        >
          <View
            style={[
              styles.pressable,
              selectedValue === item.value
                ? styles.selectedPressable
                : styles.unselectedPressable,
            ]}
          ></View>
          {typeof item.label === "function" ? (
            // @ts-ignore
            <item.label />
          ) : (
            <Text style={styles.label}>{item.label}</Text>
          )}
        </Pressable>
      ))}
    </View>
  );
}
