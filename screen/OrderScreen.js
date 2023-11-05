import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import DrinkComponent from '../component/DrinkComponent';
import OrderComponent from '../component/OrderComponent';

function OrderScreen(props) {
    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        setDrinks(props.route.params.orderItems);
    }, [props.route.params.orderItems]);
    const total = drinks.reduce((total, item) => total + item.item.price * item.num, 0);
    const handlePay = () => {
        alert('Thanks for your order!');
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>YOUR ORDERS</Text>
                <Image style={styles.searchImg} source={require('../assets/search.png')} />
            </View>
            <View style={styles.body}>

                <View style={styles.panel1}>
                    <View>
                        <Text style={styles.txt}>CAFE DELIVERY</Text>
                        <Text style={styles.txt}>Order #18</Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>$5</Text>
                    </View>
                </View>
                <View style={styles.panel2}>
                    <View>
                        <Text style={styles.txt}>CAFE</Text>
                        <Text style={styles.txt}>Order #18</Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>${total}</Text>
                    </View>
                </View>
                <View style={{ height: 430, width: '90%' }}>
                <FlatList
                    data={drinks}
                    renderItem={({ item }) => <OrderComponent item={item} n={item.num} />}
                    numColumns={1}
                    scrollEnabled={true}
                />
            </View>
            </View>
            <TouchableOpacity style={styles.pay} onPress={handlePay}>
                <Text style={styles.payTxt}>PAY</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    panel1: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00BDD6',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    panel2: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#8353E2',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        margin: 10
    },
    pay: {
        width: '90%',
        height: 50,
        backgroundColor: '#EFB034',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    payTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }

})
