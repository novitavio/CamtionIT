// Header.js
import React from 'react';
import { HStack, Icon, Text, useColorModeValue } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const titleColor = 'white'; 

  return (
    <HStack
    bg="#005F82"
    px="4" 
    py="5"
    justifyContent="space-between"
    alignItems="stretch"
    space="0"
    bottom={2}
    width="100%"
  >
      <HStack alignItems="center">
        <Text color={titleColor} fontSize="20" fontWeight="bold" ml="2">
          CamtionIT
        </Text>
      </HStack>
      <HStack space="7" mr="5">
        <Icon
          as={MaterialIcons}
          name="cloud-download"
          size="md"
          color="white"
          onPress={() => console.log("Download pressed")}
        />
        <Icon
          as={MaterialIcons}
          name="save"
          size="md"
          color="white"
          onPress={() => console.log("Save pressed")}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
