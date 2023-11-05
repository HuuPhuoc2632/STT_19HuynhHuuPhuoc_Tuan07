import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import OrderComponent from '../component/ShopComponent';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import ShopComponent from '../component/ShopComponent';


export default function ShopsScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://653f49a59e8bd3be29e02b35.mockapi.io/Shops')
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
      .catch(error => {
        console.error(error);
      });
  },[data])
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImg} source={require('../assets/back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Shops near me</Text>
        <Image style={styles.searchImg} source={require('../assets/search.png')} />
      </View>
      <View style={{ height: "100%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ShopComponent item={item} />}
          numColumns={1}
          scrollEnabled={true}
          style={{ margin: 'auto' }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20
  },
  backImg: {
    width: 44,
    height: 44,
  },
  headerTxt: {
    fontWeight: 700,
    fontSize: 24,
  },
  searchImg: {
    width: 24,
    height: 24,
  },
})