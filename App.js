import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements"
import db from "./localdb"
import PhonesSoundButton from "./components/PhonesSoundButton"

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text:"",
      displaytext:"",
      chunks:[],
      phones:[]
    }
  }
  render(){
   
   console.log(this.state.phones);
  return (
    <View>
    <Header backgroundColor = {"green"} centerComponent = {{text:"Monkey Chunky App", style:{fontSize:15, fontWeight:"bold"}}}>
    
    </Header>
    <Image source = {{uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}} style = {{width:100,height:100, alignSelf:"center"}}></Image>
    <TextInput style = {styles.inputBox} onChangeText = {(text)=>{
      this.setState({text:text})
    }}></TextInput>
    <TouchableOpacity style = {{backgroundColor:"orange", margin:20, padding:20, alignItems:"center", borderRadius:20}} onPress = {()=>{
      this.setState({chunks:db[this.state.text].chunks, phones:db[this.state.text]["phones"]})
    }}>
      <Text>Submit</Text>
    </TouchableOpacity>
    
    <View>
    {
     
  this.state.chunks.map((i, index)=>(
    <PhonesSoundButton phonesSound = {this.state.phones[index]} chunkText = {this.state.chunks[index]}/>

 
  
  ))
  
  }
  </View>

     </View>
     
  );
  }
}
const styles = StyleSheet.create({
  inputBox:{
    borderColor:"blue",
    borderWidth:2,
    marginTop:20,
    padding:20,
    textAlign:"center",
    width:"60%",
    alignSelf:"center"
  }
})
  



