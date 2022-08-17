import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import Data from './Data.json';
import MusicCard from './MusicCard';

const MusicApp = () => {
  const dataal = ({item}) => {
    console.log(item.inStock);
    return (
      <View>
        <MusicCard
          title={item.title}
          imgurl={item.imgURL}
          price={item.price}
          instock={item.inStock}
        />
      </View>
    );
  };
  const onChangeText = () => {};
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 20, padding: 5, marginRight: -40, marginTop: 4}}>
          Ara:
        </Text>
        <TextInput style={styles.inputstil} onChangeText={onChangeText} />
      </View>

      <FlatList
        data={Data}
        horizontal={false}
        renderItem={dataal}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputstil: {
    height: 30,
    marginLeft: 50,
    marginTop: 10,
    width: 250,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default MusicApp;
