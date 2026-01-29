import { ReactNode } from "react";
import { DimensionValue, Pressable, Text, View, ViewProps } from "react-native";
import { getStyles } from "./styles";

type RadioGroupItem = {
  label: string | ReactNode;
  value: string;
};

type RadioGroupProps = ViewProps & {
  items: RadioGroupItem[];
  itemWidth?: DimensionValue;
  selectedValue?: string;
  onChange: (value: string) => void;
};

export function RadioGroup({
  items,
  selectedValue,
  onChange,
  style,
  itemWidth,
  ...rest
}: RadioGroupProps) {
  const styles = getStyles(itemWidth);

  return (
    <View style={[styles.container, style]} {...rest}>
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
