
import React, { Component } from 'react'
import { primary } from '../constants'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, } from 'react-native'
import {Text, Button} from 'react-native-paper'



 class QRpage extends Component {
   

    render() {
        StatusBar.setTranslucent(true)
        StatusBar.setBackgroundColor('transparent')
        StatusBar.setBarStyle("dark-content")

      return (
        <View style={styles.container}>
            <View><Text style={styles.header}>Scan this QR-code</Text></View>
            <Image style={styles.qr} source={{uri:'https://cdn.crunchify.com/wp-content/uploads/2013/01/CrunchifyQR-Tutorial.png'}}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.slotno}>A-25</Text>
                <View style={{width:'70%'}}><Text style={styles.textinfo}>Use this QR-code to open the gate of your parking slot</Text></View>
                           
              </View>
              <Button mode='contained' style={styles.btn}>Save to Device</Button>
          </View>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flex:1,
    },
    header:{
        textAlign:'center',
        color:primary,
        fontSize:20,
        marginBottom:30,
    },
    qr:{
      width: 210,
      height: 210,
      padding:10,
      borderWidth: 4,
      borderColor: primary,
      alignSelf:"center"
    },
    slotno:{
      fontSize:40,
      color:primary,
      alignSelf:'center'
    },
    textinfo:{
        marginTop:20,
        textAlign:"center",
        fontSize:17,
    },
    btn:{
        marginTop:20,
        width:170,
        alignSelf:"center",
        borderRadius:25,
    },
    body:{
      marginTop:20,
    },
    bodyContent: {
      alignItems: 'center',
    },

  });

  export default QRpage