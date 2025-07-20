import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

interface IMealCardProps {
  id: string;
  name: string;
}

export function MealsCard({ id, name }: IMealCardProps) {
  return (
    <Link href={`/meals/${id}`} asChild>
    <TouchableOpacity>
      <Text className="text-gray-700 text-base font-sans-regular">
        Hoje, 12h25
      </Text>
      <View className="mt-2 px-4 py-5 flex-row gap-3 items-center border border-gray-400 rounded-2xl">
        <View className="size-12 items-center justify-center bg-gray-200 rounded-full">
          <Text>🔥</Text>
        </View>

        <View>
          <Text className="text-gray-700 text-base font-sans-regular">
            {name}
          </Text>
          <Text className="text-black-700 text-base font-sans-medium">
            Pão com manteiga
          </Text>
        </View>
      </View>
    </TouchableOpacity>
</Link>
  );
}