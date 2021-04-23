import * as React from "react"
import {TouchableOpacity, Text, StyleSheet} from "react-native"
import {Audio} from "expo-av"


export default class PhonesSoundButton extends React.Component{
    playSound  = async ()=>{
        await Audio.Sound.createAsync({
            uri:"https://s3-whitehatjrcontent.whjr.online/phones/"+this.props.phonesSound+".mp3"
        },
        {shouldPlay:true}
        )
      }
    render(){
        return(
            <TouchableOpacity style = {styles.buttonStyles} onPress = {this.playSound}>
                <Text style = {styles.textStyles}>{this.props.chunkText}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    buttonStyles:{
      backgroundColor:"gray",
      alignItems:"center",
      borderRadius:30,
      margin:20,
      padding:10,
      borderWidth:0.4,
      alignSelf:"center",
      width:"10%"
    },
    textStyles:{
        fontWeight:"bold",
        fontSize:20
    }
  })