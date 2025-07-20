import { View, Text } from 'react-native';
import { MealsCard } from './MealCard';

export function MealsList() {
  return (
    <View className="p-5">
      <Text className="text-gray-700 text-base font-sans-medium tracking-[1.28px]">
        Refeições
      </Text>

      <View className="gap-8 mt-4">
        <MealsCard />
      </View>
    </View>
  );
}