import { Text, View } from "react-native";

import { Container } from "@/components/container";

export default function TabTwo() {
  return (
    <Container>
      <View className="flex-1 justify-center p-6">
        <Text className="mb-4 text-center font-bold text-2xl text-foreground">
          Tab Two
        </Text>
        <Text className="text-center text-foreground">
          This is the second tab of the application.
        </Text>
      </View>
    </Container>
  );
}
