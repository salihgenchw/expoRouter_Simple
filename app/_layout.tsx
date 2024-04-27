import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
    </Stack>
  );
};

export default StackLayout;
