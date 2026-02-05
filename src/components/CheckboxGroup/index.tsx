import { ReactNode } from "react";
import { DimensionValue, Pressable, Text, View, ViewProps } from "react-native";
import { getStyles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type CheckboxGroupItem = {
  label: string | ReactNode;
  value: string;
};

type CheckboxGroupProps = ViewProps & {
  items: CheckboxGroupItem[];
  itemWidth?: DimensionValue;
  selectedValues?: string[];
  onChange: (values: string[]) => void;
};

export function CheckboxGroup({
  items,
  selectedValues = [],
  onChange,
  style,
  itemWidth,
  ...rest
}: CheckboxGroupProps) {
  const styles = getStyles(itemWidth);

  function toggleValue(value: string) {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  }

  return (
    <View style={[styles.container, style]} {...rest}>
      {items.map((item) => {
        const isChecked = selectedValues.includes(item.value);

        return (
          <Pressable
            key={item.value}
            style={styles.item}
            onPress={() => toggleValue(item.value)}
          >
            <View
              style={[
                styles.checkbox,
                isChecked ? styles.checked : styles.unchecked,
              ]}
            >
              {isChecked && (
                <Text style={styles.checkMark}>
                  <MaterialIcons name="check" />
                </Text>
              )}
            </View>

            {typeof item.label === "function" ? (
              // @ts-ignore
              <item.label />
            ) : (
              <Text style={styles.label}>{item.label}</Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
