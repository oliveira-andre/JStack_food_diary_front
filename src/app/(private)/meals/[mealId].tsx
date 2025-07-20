import { router, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import { Button } from "../../../components/Button";

export default function MealDetails() {
  const { mealId } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>
        detalhes da refeição {mealId}
      </Text>

      <Button onPress={router.back}>
        Voltar
      </Button>
    </View>
  );
}