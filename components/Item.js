import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Item = ({item,deleteItem}) => {
    return(
        <View style={styles.itemContainer}>
            <Text>{item.text}</Text>
            <Button
                title ="X"
                onPress={() => deleteItem(item.id)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'#BCA876',
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:2
    }
})

export default Item;