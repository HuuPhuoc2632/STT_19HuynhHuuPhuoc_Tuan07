import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ShopComponent(props) {
    const navigation = useNavigation()
    const { item } = props
    const goToDrink = () => {
        navigation.navigate('Drink')
    }
    return (
        <TouchableOpacity onPress={goToDrink}>
            <View style={styles.container}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#e8dfdf', margin: 10, width: 150 }}>
                        <Ionicons name={item.status === "Accepting Orders" ? "checkmark" : "lock-closed"}
                            size={20} style={{ color: item.status === "Accepting Orders" ? "green" : "red" }} />
                        <Text style={{ color: item.status === "Accepting Orders" ? "green" : "red" }}>{item.status}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#e8dfdf', margin: 10, width: 150 }}>
                        <Ionicons name="time-outline"
                            size={20} style={{ color: "green" }} />
                        <Text style={{}}>{item.time}</Text>
                    </View>
                    <Ionicons name="location" size={20} style={{ color: "green", margin: 10 }} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <Text>{item.sub}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 350,
        height: 115,
        margin: 'auto'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 20,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10
    },
})