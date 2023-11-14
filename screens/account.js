import React from "react";
import {
  ScrollView,
  Center,
  Heading,
  Box,
  Image,
  Stack,
  Text,
  NativeBaseProvider,
  Card,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Header title={"Account"} />
      <ScrollView>
        <Box flex={1} backgroundColor={"info.700"}>
          <Center>
            <Card mt={4} backgroundColor={"white"} w={300} h={"95%"} p="10">
              <Box rounded="lg">
                <Box alignItems={"center"}>
                  <Image
                    mt={4}
                    size={120}
                    bg="white"
                    source={require("../assets/it.png")}
                  ></Image>
                </Box>
                <Stack p="2" alignItems={"center"}>
                  <Heading size="xl" ml="1">
                    Kim Jong Un
                  </Heading>
                  <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="2">
                    Welcome To Profile
                  </Text>
                </Stack>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("EditProfile")}
                >
                  <Card
                    bg="info.700"
                    mt="10"
                    h="60"
                    alignItems={"center"}
                  >
                    <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("BakatMinat")}
                >
                  <Card
                    bg="info.700"
                    mt="6"
                    h="60"
                    alignItems={"center"}
                  >
                    <Text fontSize="sm" color="white">
                      Tes Bakat Minat
                    </Text>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("Settings")}
                >
                  <Card
                    bg="info.700"
                    mt="6"
                    h="60"
                    alignItems={"center"}
                  >
                    <Text fontSize="sm" color="white">
                      Settings
                    </Text>
                  </Card>
                </TouchableOpacity>
                <Card bg="info.700" mt="6" h="60" alignItems={"center"}>
                  <Text fontSize="sm" color="white">
                    Logout
                  </Text>
                </Card>
              </Box>
            </Card>
          </Center>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Profile;
