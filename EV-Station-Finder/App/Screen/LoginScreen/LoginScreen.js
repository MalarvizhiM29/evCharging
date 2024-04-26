import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function LoginScreen() {
  return (
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:80
    }}>
      <Image source={require('./../../../assets/images/ev-logo.jpg')}
        style={styles.logoImage}
      />
      <Image source={require('./../../../assets/images/ev-charging.png')}
        style={styles.bgImage}
      />
      <View style={{padding:20}}>
        <Text style={styles.heading}>Your ultimate EV charging Station Finder App</Text>
        <Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>console.log("Button Clicked")}
        >
          <Text style={{
            color:Colors.WHITE,
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:17
          }}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoImage:{
    width:240,
    height:50,
    objectFit:'cover'
  },
  bgImage:{
    width:'100%',
    height:220,
    marginTop:20,
    objectFit:'cover'
  },
  heading:{
    fontSize:25,
    fontFamily:'outfit-bold',
    textAlign:'center',
    marginTop:20
  },
  desc:{
    fontSize:17,
    fontFamily:'outfit',
    marginTop:15,
    textAlign:'center',
    color:'#000',
    color:Colors.GRAY
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
    marginTop:70
  }
})
