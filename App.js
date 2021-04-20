import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements"
import db from "./localdb"


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text:"",
      displaytext:"",
      chunks:[]
    }
  }
  render(){
    console.log()
  return (
    <View>
    <Header backgroundColor = {"green"} centerComponent = {{text:"Monkey Chunky App", style:{fontSize:15, fontWeight:"bold"}}}>
    
    </Header>
    <TextInput style = {styles.inputBox} onChangeText = {(text)=>{
      this.setState({text:text})
    }}></TextInput>
    <TouchableOpacity style = {{backgroundColor:"orange", margin:20, padding:20, alignItems:"center", borderRadius:20}} onPress = {()=>{
      this.setState({chunks:db[this.state.text].chunks})
    }}>
      <Text>Submit</Text>
    </TouchableOpacity>
    
    <View>
    {/*for(var i = 0; i<this.state.chunks.length;i++){
     <TouchableOpacity>
      <Text>{this.state.chunks[i]}</Text>
    </TouchableOpacity>
    }
   */
  this.state.chunks.map((i)=>(
    <View>
    <TouchableOpacity style = {styles.buttonStyles}>
      <Text>{i}</Text>
      </TouchableOpacity>
      </View>
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
  },
  buttonStyles:{
    backgroundColor:"gray",
    alignItems:"center",
    borderRadius:30,
    margin:20,
    padding:10,
    borderWidth:0.4,
    alignSelf:"center",
    width:"10%"
  }
})



