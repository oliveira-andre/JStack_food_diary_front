import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { VirtualizedList } from 'react-native';
import { MealsCard } from './MealCard';
import { DateSwitcher } from './DateSwitcher';
import { DailyStats } from './DailyStats';

const meals = [
  {
    id: String(Math.random()),
    name: 'Café da manhã',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Almoço',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Janta',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Café da manhã',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Almoço',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Janta',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Café da manhã',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Almoço',
    description: 'Pão com manteiga',
  },
  {
    id: String(Math.random()),
    name: 'Janta',
    description: 'Pão com manteiga',
  },
];

export function MealsList() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="p-5">
      <View>
        <FlatList
          data={meals}
          keyExtractor={(meal) => meal.id}
          contentContainerStyle={{ paddingBottom: 80 + bottom + 16 }}
          // contentContainerStyle={{   gap: 32 }}
          // contentContainerClassName="gap-8"
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={MealsListHeader}
          renderItem={({ item: meal }) => (
            <View className="mx-5">
              <MealsCard
                id={meal.id}
                name={meal.name}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

function MealsListHeader() {
  return (
    <>
      <DateSwitcher />
      <View className="mt-2">
        <DailyStats
          calories={{
            current: 500,
            goal: 2500,
          }}
          proteins={{
            current: 2000,
            goal: 2500,
          }}
          carbohydrates={{
            current: 500,
            goal: 2500,
          }}
          fats={{
            current: 500,
            goal: 2500,
          }}
        />
      </View>

      <View className="h-px bg-gray-200 mt-7" />

      <Text className="text-black-700 text-base font-sans-medium tracking-[1.28px]">
        Refeições
      </Text>
    </>
  );
}

function Separator() {
  return (
    <View className="h-8" />
  );
}