// ArticleDetail.js
import React from 'react';
import { VStack, Text, NativeBaseProvider, ScrollView } from 'native-base';
import articleData from '../articleData';

const ArticleDetail = ({ route }) => {
  const { item } = route.params;
  const data = articleData.find((data) => data.id === item.id);

  return (
    <NativeBaseProvider>
      <ScrollView flex={1} height="100%">
        <VStack p={3}>
          <Text fontWeight="bold" fontSize="xl" mb={3}>
            {data.title}
          </Text>
          <Text fontSize="md" textAlign="justify" mb={3}>
            {data.content}
          </Text>
          {/* Tampilkan additionalDetails jika tersedia */}
          {data.additionalDetails && (
            <Text fontSize="sm" textAlign="justify" mb={3}>
              {data.additionalDetails}
            </Text>
          )}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ArticleDetail;
