// SearchBar.js
import React, { useState } from "react";
import { VStack, Input, Icon, Text, ScrollView, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const initialData = [
  {
    id: 1,
    title: "Analisis Manajemen Pelayanan Perbankan pada Aplikasi Bri Mobile berbasis TI menggunakan Framework ITIL V3",
    content: "Penelitian ini membahas tentang analisis manajemen pelayanan perbankan pada aplikasi Brimo yang berbasis TI dengan menggunakan framework ITIL 3..... ",
  },
  {
    id: 2,
    title: "Perencanaan Strategis Sistem Informasi dan Teknologi Informasi pada Dinas Perindustrian dan Tenaga Kerja Kota Salatiga",
    content: "Sistem informasi dan teknologi informasi (SI/TI) merupakan salah satu faktor yang mempengh" +
      "uhi keberhasilan suatu organisasi. Sebagai contoh...",
  },
  {
    id: 3,
    title: "Perancangan Sistem Informasi Manajemen Proyek: Sistem Informasi Kontraktor",
    content: "Kegiatan dan pelaksanaan proyek terdiri dari bermacam proses dan prosedur yang haru" +
      "s diselenggarakan bersama antara pihak kontraktor, konsultan dan stakeholder selaku" +
      " pemegang modal...",
  },
  {
    id: 4,
    title: "Pemantauan dan Evaluasi Terhadap Kinerja Pemerintah Daerah Melalui Standar Pelay" +
      "anan Minimal",
    content: "Sistem informasi dan teknologi informasi (SI/TI) merupakan salah satu faktor yang" +
      " mempengh" +
      "ui keberhasilan suatu organisasi. Sebagai contoh, sistem informasi dan teknologi inf" +
      "ormasi pada salah satu organisasi yang ada... ",
  },
];

const SearchBar = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(initialData);

  const handleSearch = () => {
    const filteredData = initialData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  const navigateToDetail = (item) => {
    // Navigate to the ArticleDetail screen with the selected item
    navigation.navigate("ArticleDetail", { item });
  };

  return (
    <ScrollView flex={1} width="100%">
      <VStack space={5} width="320" alignSelf="center">
        <VStack>
          <Text fontSize="lg" fontWeight="bold" color="blue.500" mb={2}>
            Search
          </Text>
          <Input
            placeholder="Search"
            variant="filled"
            borderRadius={10}
            py={2}
            px={3}
            InputLeftElement={
              <Icon
                ml={2}
                size={6}
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
            onChangeText={(text) => setSearchTerm(text)}
            onBlur={handleSearch}
          />
        </VStack>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigateToDetail(item)}
          >
            <VStack
              p={3}
              borderWidth={1}
              borderRadius="md"
              mb={2}
              backgroundColor="white"
            >
              <Text
                fontWeight="bold"
                mt={0}
                fontSize="lg"
                textAlign="justify"
                mb={1}
              >
                {item.title}
              </Text>
              <Text fontSize="sm" textAlign="justify">
                {item.content}
              </Text>
            </VStack>
          </TouchableOpacity>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default SearchBar;
