import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { HomeHeader } from '../../components/HomeHeader';
import { MealsList } from '../../components/MealsList';
import { CreateMealBottomBar } from '../../components/CreateMealBottomBar';

export default function Page() {
  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <MealsList />

      <CreateMealBottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
