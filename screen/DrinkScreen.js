import { Image, View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import DrinkComponent from "../component/DrinkComponent";
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
function Drinks() {
    const navigation = useNavigation();
    const goToOrder = () => {
        if(orderItems.length > 0){
            navigation.navigate('Order', {orderItems: orderItems});
        }
        else{
            alert('Please choose your drink!');
        }
    }
    const [orderItems, setOrderItems] = useState([]);
    const handleOrder = (item, num) => {
        setOrderItems((prevOrderItems) => {
            // Tìm xem sản phẩm đã có trong danh sách đặt hàng hay chưa
            const existingItemIndex = prevOrderItems.findIndex((orderItem) => orderItem.item.name === item.name);
    
            if (num === 0) {
                // Nếu num = 0, xóa sản phẩm ra khỏi danh sách đặt hàng
                if (existingItemIndex !== -1) {
                    const newOrderItems = [...prevOrderItems];
                    newOrderItems.splice(existingItemIndex, 1);
                    return newOrderItems;
                }
            } else {
                if (existingItemIndex !== -1) {
                    // Nếu sản phẩm đã tồn tại trong danh sách, cập nhật số lượng
                    const newOrderItems = [...prevOrderItems];
                    newOrderItems[existingItemIndex].num = num;
                    return newOrderItems;
                } else {
                    // Nếu sản phẩm chưa tồn tại, thêm vào danh sách đặt hàng
                    return [...prevOrderItems, { item, num }];
                }
            }
            return prevOrderItems;
        });
    };
      useEffect(() => {
        console.log(orderItems);
    }, [orderItems]);
    return (
        
        <View style={styles.wrapper}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Drinks</Text>
                <Image style={styles.searchImg} source={require('../assets/search.png')} />
            </View>
            <View style={{ height: "100%", width: '100%' }}>
                <FlatList
                    data={drinks}
                    renderItem={({ item }) => <DrinkComponent item={item} onOrder={handleOrder} n={0}/>}
                    numColumns={1}
                    scrollEnabled={true}
                />
            </View>
            <TouchableOpacity style={styles.goBtn} onPress={goToOrder}>
                <Text style={styles.goTxt}>GO TO CART</Text>
            </TouchableOpacity>
        </View>
    );
}
const drinks = [
    {
        name: 'Milk',
        price: 20,
    },
    {
        name: 'Origin ',
        price: 68,
    },
    {
        name: 'Salt',
        price: 5,
    },
    {
        name: 'Espresso',
        price: 9,
    },
    {
        name: 'Capuchino',
        price: 23,
    },
    {
        name: 'Weasel ',
        price: 20,
    },
    {
        name: 'Cull',
        price: 0,
    },
    {
        name: 'Milk',
        price: 9,
    },
]

export default Drinks;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 20,

    },
    headerWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    goBtn: {
        height: 45,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFB034',
        marginTop: 20,
        borderRadius: 6,
    },
    goTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 400,
    }
})