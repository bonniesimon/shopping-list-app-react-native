import React from 'react'
import {View, Text, StyleSheet} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Shopping List 0.1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#202D7D",
        padding:20,
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        color:'white'
    }
})

export default Header
