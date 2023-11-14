import {
    Center,
    Heading,
    Box,
    Image,
    Stack,
    Text,
    NativeBaseProvider,
    Card,
    HStack,
    VStack
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";

const BakatMinat = () => {
    const navigation = useNavigation();
    return (
        <NativeBaseProvider>
            <HStack>
                <Image mt={2} size={120} source={require("../assets/it.png")}></Image>
                <VStack>
                    <Heading mt={4} ml={4} fontSize={25} >Hi, Kim Jong Un</Heading>
                    <Text ml={4} fontSize="8">Jika ingin mengulangi tes, klick tombol ulangi tes!</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("UlangiTes")}>
                        <Box p={2} w={110} rounded={'lg'} backgroundColor={'info.700'} mt={4} ml={4}>
                            <HStack>
                                <Text mr={1} mt={-1} color={'white'}>Ulangi Tes</Text>
                                <Ionicons name="chevron-forward-outline" size={20} color={'white'} />
                            </HStack>
                        </Box >
                    </TouchableOpacity>
                </VStack>
            </HStack>
            <Box flex={1} mt={4} backgroundColor={'info.700'}>
                <Center>
                    <Card backgroundColor={'white'} w={280} h={'80%'} p='4' mt={4}>
                        <Heading fontSize={20}>Visual Auditori</Heading>
                        <Text>Gaya belajar kamu cenderung lebih kuat pada gaya belajar visual yang mampu menyerap
                            informasi terkait dengan visual, gambar, warna, peta, diagram, dan belajar dari apa yang dilihat oleh mata.
                        </Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("GayaBelajar")}>
                            <Box p={3} rounded={5} mt={10} backgroundColor={'info.700'}>
                                <HStack justifyContent={'space-between'}>
                                    <Text color={'white'}>Gaya Belajar</Text>
                                    <Ionicons name="chevron-forward-outline" size={20} color={'white'} />
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("SaranBelajar")}>
                            <Box mt={10} p={3} rounded={5} backgroundColor={'info.700'}>
                                <HStack justifyContent={'space-between'}>
                                    <Text color={'white'}>Saran Belajar</Text>
                                    <Ionicons name="chevron-forward-outline" size={20} color={'white'} />
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                    </Card>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Selengkapnya")}>
                        <Box mt={10}>
                            <HStack p={2} w={300} justifyContent={'center'} >
                                <Text mt={-1} color={'white'}>Lihat Detail Selengkapnya</Text>
                                <Ionicons name="chevron-forward-outline" size={20} color={'white'} />
                            </HStack>
                        </Box>
                    </TouchableOpacity>
                </Center>
            </Box>
        </NativeBaseProvider>
    );
};

export default BakatMinat;