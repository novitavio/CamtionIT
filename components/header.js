import React from "react";
import { StatusBar, NativeBaseProvider, Box, HStack, Icon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="#005F82" px="1" py="13" justifyContent="space-between" alignItems="center" w="100%" space="0">
        <HStack alignItems="center">
          <Icon
            as={MaterialIcons}
            name="menu"
            size="md" // Ubah ukuran ikon menjadi medium
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
          <Text color="white" fontSize="20" fontWeight="bold" ml="2">
            CamtionIT
          </Text>
        </HStack>
        <HStack space="2" mr="4">
          <Icon
            as={MaterialIcons}
            name="search"
            size="md" // Ubah ukuran ikon menjadi medium
            color="white"
            onPress={() => console.log("Search pressed")}
          />
          <Icon
            as={MaterialIcons}
            name="notifications-none"
            size="md" // Ubah ukuran ikon menjadi medium
            color="white"
            onPress={() => console.log("Notifications pressed")}
          />
        </HStack>
      </HStack>
    </>
  );
};

const App = () => (
  <NativeBaseProvider>
    <Box flex={1} px="3">
      <Header />
      {/* Tambahkan konten lainnya di sini */}
    </Box>
  </NativeBaseProvider>
);

export default App;
