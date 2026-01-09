import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "../global.css";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="movies/[id]"
      options={{
        headerShown: false,
      }}
    />

   

  </Stack>;
}
