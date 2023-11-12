import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import Header from '../components/header';

const Separator = () => (
  <View style={styles.separator} />
);

const Jurusan = () => {
  const dataJurusan = [
    {
      nama: 'Sistem Informasi',
      deskripsi: 'Jurusan Sistem Informasi fokus pada integrasi teknologi informasi dalam konteks bisnis dan organisasi. Mahasiswa mempelajari pengembangan sistem informasi untuk mendukung kebutuhan perusahaan, termasuk analisis kebutuhan, desain, dan implementasi solusi berbasis IT.',
      gambar: require('../assets/si.jpg'),
    },
    {
      nama: 'Teknik Informatika',
      deskripsi: 'Teknik Informatika mencakup desain, pengembangan, dan implementasi perangkat lunak dan perangkat keras. Mahasiswa memahami prinsip dasar teknologi informasi, algoritma, pemrograman, dan arsitektur komputer.',
      gambar: require('../assets/teknologi-informasi.png'),
    },
    {
      nama: 'Teknologi Informasi',
      deskripsi: 'Jurusan ini menggabungkan aspek teknologi informasi dengan fokus pada aplikasinya dalam dunia bisnis. Mahasiswa mempelajari penerapan praktis teknologi informasi untuk mendukung operasi bisnis dan pengambilan keputusan.',
      gambar: require('../assets/teknik-informatika.png'),
    },
    {
      nama: 'Rekayasa Perangkat Lunak',
      deskripsi: 'Rekayasa Perangkat Lunak berkaitan dengan pengembangan perangkat lunak dengan pendekatan sistematis dan terukur. Mahasiswa memahami siklus hidup pengembangan perangkat lunak, dari analisis kebutuhan hingga pemeliharaan.',
      gambar: require('../assets/rekayasa-perangkat-lunak.png'),
    },
    {
      nama: 'Sains Data',
      deskripsi: 'Sains Data mencakup analisis data besar untuk mengidentifikasi tren, pola, dan wawasan yang dapat mendukung pengambilan keputusan. Mahasiswa mempelajari statistika, pembelajaran mesin, dan teknik analisis data.',
      gambar: require('../assets/sd.png')
    },
    {
      nama: 'Bisnis Digital',
      deskripsi: 'Jurusan Bisnis Digital membahas konsep dan aplikasi transformasi digital dalam konteks bisnis. Mahasiswa memahami penerapan teknologi untuk meningkatkan efisiensi dan menciptakan nilai bisnis.',
      gambar: require('../assets/db.png'),
    },
  ];

  return (
    <NativeBaseProvider>
      <Box flex={1} px="1">
        <Header />
        <ScrollView>
          <View style={styles.outerContainer}>
            {dataJurusan.map((jurusan, index) => (
              <View key={index}>
                <View style={styles.container}>
                  <Image
                    source={jurusan.gambar}
                    style={styles.image}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{jurusan.nama}</Text>
                    <Text style={styles.description}>{jurusan.deskripsi}</Text>
                  </View>
                </View>
                {index !== dataJurusan.length - 1 && <Separator />}
              </View>
            ))}
          </View>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#add8e6', // Warna latar belakang biru muda
    padding: 16,
    marginLeft: -16,
    marginRight: -16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between', // Memusatkan elemen secara vertikal
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'brown',
  },
  separator: {
    height: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

export default Jurusan;
