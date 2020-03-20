import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'



const Form = ({textInput, addItem}) => {
    return (
       <View style={styles.formContainer}>
           <TextInput 
                style={styles.textbox}
                onChangeText={text => textInput(text)}/>
           <Button
                style={styles.btn}
                title="Add Item"
                color="#BCA876"
                onPress={() => addItem()}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    textbox:{
        paddingVertical:10,
        paddingHorizontal:5,
        color:'white',
        flexGrow:1,
        borderBottomColor:'#202D7D',
        borderBottomWidth:5
    },
    formContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:10,
        padding:2
        
    },
    btn:{
        marginHorizontal:3,
        color:'black'
    }


})


export default Form;
