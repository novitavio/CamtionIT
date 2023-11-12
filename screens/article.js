// Article.js
import React from 'react';
import { Center, View } from 'native-base';
import Header from "../components/header";
import SearchBar from '../components/searchbar';

const Article = ({ navigation }) => {
  return (
    <>
      <Header title={'Article'} />
      <View flex={1} paddingLeft={2}>
        <SearchBar navigation={navigation} />
      </View>
    </>
  );
};

export default Article;
