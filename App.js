import React ,{useState} from 'react'
import {View, FlatList,Keyboard, StyleSheet} from 'react-native';

//importing dependencies
import {uuid} from 'uuidv4';


//importing Components
import Header from './components/Header';
import Item from './components/Item';
import Form from './components/Form';


const App = () => {

  const [items, setItems] = useState([
    {id:1, text:'Milk'},
    {id:2, text:'MilkyBar'},
    {id:3, text:'LimeJuice'},
  ]);

  const [value, setValue] = useState('');




  const textInput = (text) => {
    
    // console.log(input);
    setValue(text);
  }

  //Function to get random number for the id
  const getRandomNumber = (max) => {
    return Math.floor(Math.random()*Math.floor(max));
  }

  const addItem = () => {
		const newItem = {
			id:getRandomNumber(10000),
			text:value
		};
		// setItems(...items, newItem);
		let newItems = items;
		newItems.push(newItem);
    setItems(newItems);
    Keyboard.dismiss();
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Header/>
      <Form textInput={textInput} addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({ item }) => <Item item={item} deleteItem={deleteItem} />}
        //expects a key prop to be string      
        keyExtractor={item => item.id.toString()}
        style={styles.listContainer}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  listContainer:{
    marginTop:10
  },
  appContainer:{
    backgroundColor:'#2B2928',
    flex:1
  }
})

export default App
