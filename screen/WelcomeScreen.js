import { View, Text, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://653f49a59e8bd3be29e02b35.mockapi.io/Shops')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        setData(json)
    })
    .catch(error => {
      console.error(error);
    });
    })
    const goToShop = () => {
       navigation.navigate('Shops')
    }
  return (
    <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold' }}>Welcome to Cafe world</Text>
        {data.map((item) => {
            return <Image source={{uri: item.image}} style={{height: 115, width: 350, margin: 10}}/>
        })}
        <TouchableOpacity style={{height: 70, width: 350, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems:'center'}} onPress={goToShop}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
  )
}