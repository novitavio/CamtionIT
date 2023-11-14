import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { NativeBaseProvider, Heading, Center, Box, Image, FormControl, Input, Button, Stack, Card } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Gap from '../components/gap';

const EditProfile = () => {
  const [Username, setUsername] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Bday, setBday] = React.useState('');
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <ScrollView>
        <SafeAreaView flex={1} backgroundColor={'#455443'}>
          <Box flex={1} backgroundColor={'info.700'}>
            <Box mt={100} mr={'10'}></Box>

            <Center>
              <Heading color={'white'} size={'xl'}>
                Edit Profile
              </Heading>
              <Image size={150} borderRadius={100} source={require('../assets/it.png')} />
              <Gap height={20} />
              <Card backgroundColor={'white'} borderTopRadius={20} borderBottomRadius={20} borderColor={'#DDF2FD'} w={'100%'} h={'90%'}>
                <Stack alignSelf="left" mt="4">
                  <FormControl>
                    <FormControl.Label _text={{ bold: true, fontSize: 'md' }}>
                      Username
                    </FormControl.Label>
                    <Input placeholder="Username" onChangeText={(value) => setUsername({ ...Username, name: value })} />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label _text={{ bold: true, fontSize: 'md' }}>
                      Email
                    </FormControl.Label>
                    <Input placeholder="Email" onChangeText={(value) => setEmail({ ...Email, name: value })} />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label _text={{ bold: true, fontSize: 'md' }}>
                      Password
                    </FormControl.Label>
                    <Input placeholder="Password" onChangeText={(value) => setPassword({ ...Password, name: value })} />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label _text={{ bold: true, fontSize: 'md' }}>
                      Date of Birth
                    </FormControl.Label>
                    <Input placeholder="DD/MM/YYYY" onChangeText={(value) => setBday({ ...Bday, name: value })} />
                  </FormControl>
                </Stack>
                <Button onPress={() => navigation.navigate('Profile')} mt={5}>
                  Save Changes
                </Button>
              </Card>
            </Center>
          </Box>
        </SafeAreaView>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditProfile;
