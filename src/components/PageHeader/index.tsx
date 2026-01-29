import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBadge } from "../StatusBadge";
import { Status } from "@/types/enums/status";
import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

type PageHeaderProps = {
  title: string;
  extra?: ReactNode;
};

export function PageHeader({ title, extra }: PageHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={28} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
      {extra}
    </View>
  );
}
