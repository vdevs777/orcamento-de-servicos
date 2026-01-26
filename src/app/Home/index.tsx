import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { StatusBadge } from "@/components/StatusBadge";
import { colors } from "@/theme/colors";
import { Text, TextInput, TextInputBase, View } from "react-native";
import { StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={{ padding: 56 }}>
      <Text>a</Text>
      <StatusBadge status="sent" />
      <StatusBadge status="draft" />
      <StatusBadge status="approved" />
      <StatusBadge status="rejected" />
    </View>
  );
}
