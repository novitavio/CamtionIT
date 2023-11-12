// JurusanDetail.js
import React from 'react';
import { VStack, Image, Text, Center, NativeBaseProvider } from 'native-base';

const JurusanDetail = ({ route }) => {
  // Extract the Jurusan data from the route parameters
  const { jurusan } = route.params;

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Image
          source={jurusan.image} // Replace with the actual image source
          alt={jurusan.title}    // Replace with the alt text for accessibility
          size="xl"
          resizeMode="contain"
        />
        <VStack space={2} mt={4} px={4}>
          <Text fontSize="xl" fontWeight="bold">
            {jurusan.title}
          </Text>
          <Text textAlign="justify">
            {jurusan.description} {/* Replace with the actual description */}
          </Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default JurusanDetail;
