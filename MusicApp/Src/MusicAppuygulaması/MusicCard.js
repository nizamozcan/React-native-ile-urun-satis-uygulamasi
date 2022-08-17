import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const MusicCard = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{height: 70}}>
          <Text style={styles.baslik}>{props.title}</Text>
        </View>
        <View
          style={{
            height: 205,
            width: 155,
            backgroundColor: '#DCDCDC',
            borderRadius: 5,
          }}>
          <Image
            style={{
              width: 140,
              height: 180,
              marginLeft: 7.5,
              marginTop: 12,
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: '#808080',
            }}
            source={{uri: props.imgurl}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', marginLeft: 4}}>{props.price}</Text>

          {props.instock == 'false' ? (
            <Text style={{color: 'red', marginLeft: 15}}>Stokta yok</Text>
          ) : (
            console.log('stok var')
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    borderRadius: 25,
    height: 300,
    width: 170,
    borderWidth: 2,
  },
  baslik: {marginLeft: 15, fontSize: 18, color: 'black'},
  icerik: {marginLeft: 15, color: 'black'},
  buttonstyle: {
    backgroundColor: 'blue',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  butonicerik: {color: 'white', marginLeft: 150},
});
export default MusicCard;
