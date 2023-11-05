import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

const OrderComponent = (props) => {
    const { item, n } = props
    const [num, setNum] = useState(n)
    
    const descNum = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }
    const incNum = () => {
        setNum(num + 1)
    }

    return (
        <View style={styles.itemWrapper}>
            <View style={styles.itemLeft}>
                <View style={styles.block}></View>
                <View style={styles.detailWrapper}>
                    <Text style={styles.drinkName}>{item.item.name}</Text>
                    <View style={styles.priceWrapper}>
                        <Image style={styles.priceImg} source={require('../assets/Frame.png')} />
                        <Text style={styles.price}>${item.item.price}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={descNum}>
                    <Image style={styles.btnImg} source={require('../assets/desc.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>{num}</Text>
                <TouchableOpacity style={styles.btn} onPress={incNum}>
                    <Image style={styles.btnImg} source={require('../assets/inc.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderComponent

const styles = StyleSheet.create({
    itemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#BCC1CA',
        width : '100%',
    },
    itemLeft: {
        display: 'flex',
        flexDirection: 'row',
    },
    block: {
        width: 60,
        height: 60,
        backgroundColor: '#d9d9d9',
    },
    detailWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    drinkName: {
        fontSize: 16,
        fontWeight: 500,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceImg: {
        width: 12,
        height: 12,
    },
    price: {
        color: '#565E6C',
        fontSize: 12,
        fontWeight: 400,
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '25%',
        marginRight: 20
    },
    btnImg: {
        width: 20,
        height: 20,
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