// ArticleDetail.js
import React from 'react';
import { VStack, Text, NativeBaseProvider } from 'native-base';

const ArticleDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <NativeBaseProvider>
      <VStack flex={1} justifyContent="center" alignItems="center" px={3}>
        <Text fontWeight="bold" fontSize="xl" mb={3}>
          {item.title}
        </Text>
        <Text fontSize="md" textAlign="justify" mb={3}>
          {item.content}
        </Text>
        {/* Display additional details if available */}
        {item.additionalDetails && (
          <Text fontSize="sm" textAlign="justify" mb={3}>
            {item.additionalDetails}
          </Text>
        )}
      </VStack>
    </NativeBaseProvider>
  );
};

export default ArticleDetail;
